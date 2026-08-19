/**
 * Pulls published posts out of a Notion database and writes them to
 * `content/posts/` as JSON, ahead of `next build`.
 *
 * The site is a static export, so nothing can call Notion at request time —
 * every post has to be on disk before Next renders. Run via `npm run build`
 * (wired as `prebuild`) or on its own with `npm run sync:notion`.
 *
 * Required env:
 *   NOTION_TOKEN        internal integration secret
 *   NOTION_DATABASE_ID  the blog database (a data source id also works)
 *
 * With either unset the script exits cleanly and the blog renders empty, so a
 * fresh clone builds without credentials.
 */

import { Client, collectPaginatedAPI, isFullBlock, isFullPage } from "@notionhq/client";
import type {
  BlockObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client";
import { createHash } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { imageSize } from "./image-size";
import type { Annotations, Asset, Block, ListItem, Post, PostMeta, Span, TodoItem } from "../lib/notion/types";

const OUTPUT_DIR = path.join(process.cwd(), "content", "posts");
const IMAGE_DIR = path.join(process.cwd(), "public", "notion");
/** Public URL prefix matching IMAGE_DIR once Next copies public/ into out/. */
const IMAGE_ROUTE = "/notion";
const WORDS_PER_MINUTE = 220;

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

/* Blocks whose type this script has no branch for. Collected rather than thrown
   so one exotic block doesn't fail a deploy — they're listed at the end. */
const skipped = new Set<string>();

async function main() {
  if (!token || !databaseId) {
    console.warn(
      "[notion] NOTION_TOKEN or NOTION_DATABASE_ID unset — skipping sync, the blog will build empty."
    );
    await writeIndex([]);
    return;
  }

  const notion = new Client({ auth: token });
  const dataSourceId = await resolveDataSource(notion, databaseId);

  const rows = await collectPaginatedAPI(notion.dataSources.query, {
    data_source_id: dataSourceId,
    filter: { property: "Status", select: { equals: "Published" } },
    sorts: [{ property: "Published", direction: "descending" }],
  });

  const pages = rows.filter(isFullPage);
  console.log(`[notion] ${pages.length} published post${pages.length === 1 ? "" : "s"}`);

  /* Rebuilt from scratch every run: a post unpublished in Notion has to stop
     existing on the site, which a merge-in-place write would never do. */
  await rm(OUTPUT_DIR, { recursive: true, force: true });
  await mkdir(OUTPUT_DIR, { recursive: true });
  await pruneImages();

  const index: PostMeta[] = [];
  const seenSlugs = new Set<string>();

  for (const page of pages) {
    const post = await buildPost(notion, page, seenSlugs);
    if (!post) continue;

    const { blocks, ...meta } = post;
    void blocks;
    index.push(meta);
    await writeFile(path.join(OUTPUT_DIR, `${post.slug}.json`), JSON.stringify(post), "utf8");
    console.log(`[notion]   ${post.slug}`);
  }

  await writeIndex(index);

  if (skipped.size > 0) {
    console.warn(`[notion] unrendered block types: ${[...skipped].sort().join(", ")}`);
  }
}

async function writeIndex(index: PostMeta[]) {
  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(path.join(OUTPUT_DIR, "index.json"), JSON.stringify(index), "utf8");
}

/**
 * The 2025-09-03 API version splits databases from the data sources inside
 * them, and only data sources are queryable. A Notion URL gives you a database
 * id, so accept either and look up the data source when needed.
 */
async function resolveDataSource(notion: Client, id: string): Promise<string> {
  try {
    const database = await notion.databases.retrieve({ database_id: id });
    const sources = "data_sources" in database ? database.data_sources : [];
    if (sources.length > 0) return sources[0].id;
  } catch {
    // Not a database id — fall through and use it as a data source id directly.
  }
  return id;
}

async function buildPost(
  notion: Client,
  page: PageObjectResponse,
  seenSlugs: Set<string>
): Promise<Post | null> {
  const title = plainText(titleProperty(page));
  if (!title) {
    console.warn(`[notion] page ${page.id} has no title — skipped`);
    return null;
  }

  const slug = uniqueSlug(textProperty(page, "Slug") || slugify(title), seenSlugs);
  const blocks = await fetchBlocks(notion, page.id, slug);

  return {
    id: page.id,
    slug,
    title,
    summary: textProperty(page, "Summary"),
    date: dateProperty(page) ?? page.created_time.slice(0, 10),
    tags: multiSelectProperty(page, "Tags"),
    cover: await coverAsset(page, slug),
    readingMinutes: Math.max(1, Math.round(countWords(blocks) / WORDS_PER_MINUTE)),
    blocks,
  };
}

/* ---------- block tree ---------- */

async function fetchBlocks(notion: Client, blockId: string, slug: string): Promise<Block[]> {
  const raw = await collectPaginatedAPI(notion.blocks.children.list, { block_id: blockId });
  const blocks: Block[] = [];

  for (const block of raw) {
    if (!isFullBlock(block)) continue;
    const converted = await convert(notion, block, slug);
    if (converted) blocks.push(converted);
  }

  return group(blocks);
}

async function children(notion: Client, block: BlockObjectResponse, slug: string): Promise<Block[]> {
  return block.has_children ? fetchBlocks(notion, block.id, slug) : [];
}

async function convert(
  notion: Client,
  block: BlockObjectResponse,
  slug: string
): Promise<Block | null> {
  const id = block.id;

  switch (block.type) {
    case "paragraph":
      return {
        id,
        kind: "paragraph",
        spans: spans(block.paragraph.rich_text),
        children: await children(notion, block, slug),
      };

    /* Split rather than indexed by block.type: the three heading responses are a
       union, and TS can't prove the key matches the member it came from. */
    case "heading_1":
      return heading(1, block.heading_1, id, await children(notion, block, slug));
    case "heading_2":
      return heading(2, block.heading_2, id, await children(notion, block, slug));
    case "heading_3":
      return heading(3, block.heading_3, id, await children(notion, block, slug));

    /* Emitted one per bullet; group() merges neighbouring runs afterwards. */
    case "bulleted_list_item":
      return {
        id,
        kind: "list",
        ordered: false,
        items: [{ id, spans: spans(block.bulleted_list_item.rich_text), children: await children(notion, block, slug) }],
      };

    case "numbered_list_item":
      return {
        id,
        kind: "list",
        ordered: true,
        items: [{ id, spans: spans(block.numbered_list_item.rich_text), children: await children(notion, block, slug) }],
      };

    case "to_do":
      return {
        id,
        kind: "todo",
        items: [
          {
            id,
            spans: spans(block.to_do.rich_text),
            checked: block.to_do.checked,
            children: await children(notion, block, slug),
          },
        ],
      };

    case "quote":
      return {
        id,
        kind: "quote",
        spans: spans(block.quote.rich_text),
        children: await children(notion, block, slug),
      };

    case "callout":
      return {
        id,
        kind: "callout",
        spans: spans(block.callout.rich_text),
        icon: block.callout.icon?.type === "emoji" ? block.callout.icon.emoji : null,
        color: block.callout.color,
        children: await children(notion, block, slug),
      };

    case "toggle":
      return {
        id,
        kind: "toggle",
        spans: spans(block.toggle.rich_text),
        children: await children(notion, block, slug),
      };

    case "code":
      return {
        id,
        kind: "code",
        text: plainText(block.code.rich_text),
        language: block.code.language,
        caption: spans(block.code.caption),
      };

    case "image": {
      const url = fileUrl(block.image);
      if (!url) return null;
      const caption = spans(block.image.caption);
      const asset = await downloadImage(url, slug, plainText(block.image.caption));
      return asset ? { id, kind: "image", asset, caption } : null;
    }

    case "video": {
      const url = fileUrl(block.video);
      return url ? { id, kind: "video", src: url, caption: spans(block.video.caption) } : null;
    }

    case "file": {
      const url = fileUrl(block.file);
      return url
        ? { id, kind: "file", url, name: block.file.name ?? "Download", caption: spans(block.file.caption) }
        : null;
    }

    case "bookmark":
      return { id, kind: "bookmark", url: block.bookmark.url, caption: spans(block.bookmark.caption) };

    case "embed":
      return { id, kind: "embed", url: block.embed.url, caption: spans(block.embed.caption) };

    case "equation":
      return { id, kind: "equation", expression: block.equation.expression };

    case "divider":
      return { id, kind: "divider" };

    case "column_list": {
      const columns = await collectPaginatedAPI(notion.blocks.children.list, { block_id: id });
      const rendered: Block[][] = [];
      for (const column of columns) {
        if (!isFullBlock(column) || column.type !== "column") continue;
        rendered.push(await fetchBlocks(notion, column.id, slug));
      }
      return { id, kind: "columns", columns: rendered };
    }

    case "table": {
      const rows = await collectPaginatedAPI(notion.blocks.children.list, { block_id: id });
      return {
        id,
        kind: "table",
        hasColumnHeader: block.table.has_column_header,
        hasRowHeader: block.table.has_row_header,
        rows: rows
          .filter(isFullBlock)
          .filter((row) => row.type === "table_row")
          .map((row) => row.table_row.cells.map(spans)),
      };
    }

    /* Structural wrappers their parent already handled, and blocks with no
       standalone meaning in an article. Dropped without a warning. */
    case "column":
    case "table_row":
    case "table_of_contents":
    case "breadcrumb":
    case "synced_block":
      return null;

    default:
      skipped.add(block.type);
      return { id, kind: "unsupported", type: block.type };
  }
}

function heading(
  level: 1 | 2 | 3,
  value: { rich_text: RichTextItemResponse[]; is_toggleable: boolean },
  id: string,
  nested: Block[]
): Block {
  return { id, kind: "heading", level, spans: spans(value.rich_text), toggleable: value.is_toggleable, children: nested };
}

/**
 * Merges neighbouring single-item lists into one list block, so a run of five
 * bullets renders as one <ul> with five <li> rather than five separate lists.
 * Also recurses into anything that nests.
 */
function group(blocks: Block[]): Block[] {
  const merged: Block[] = [];

  for (const block of blocks) {
    const previous = merged[merged.length - 1];

    if (
      block.kind === "list" &&
      previous?.kind === "list" &&
      previous.ordered === block.ordered
    ) {
      previous.items = [...previous.items, ...block.items];
      continue;
    }
    if (block.kind === "todo" && previous?.kind === "todo") {
      previous.items = [...previous.items, ...block.items];
      continue;
    }
    merged.push(block);
  }

  return merged.map(regroupChildren);
}

function regroupChildren(block: Block): Block {
  if ("children" in block && block.children.length > 0) {
    return { ...block, children: group(block.children) };
  }
  if (block.kind === "list" || block.kind === "todo") {
    const items = block.items.map((item) => ({ ...item, children: group(item.children) }));
    return block.kind === "list"
      ? { ...block, items: items as ListItem[] }
      : { ...block, items: items as TodoItem[] };
  }
  if (block.kind === "columns") {
    return { ...block, columns: block.columns.map(group) };
  }
  return block;
}

/* ---------- rich text ---------- */

function spans(richText: RichTextItemResponse[]): Span[] {
  return richText.map((item) => {
    const annotations: Annotations = {
      bold: item.annotations.bold,
      italic: item.annotations.italic,
      strikethrough: item.annotations.strikethrough,
      underline: item.annotations.underline,
      code: item.annotations.code,
      color: item.annotations.color,
    };

    return {
      text: item.plain_text,
      /* Notion stores an internal page link as a bare page id; there is no
         public URL for it on this site, so only keep real hrefs. */
      href: item.href && /^https?:\/\//.test(item.href) ? item.href : null,
      annotations,
      ...(item.type === "equation" ? { equation: item.equation.expression } : {}),
    };
  });
}

function plainText(richText: RichTextItemResponse[]): string {
  return richText.map((item) => item.plain_text).join("");
}

/* ---------- page properties ---------- */

function titleProperty(page: PageObjectResponse): RichTextItemResponse[] {
  for (const property of Object.values(page.properties)) {
    if (property.type === "title") return property.title;
  }
  return [];
}

function textProperty(page: PageObjectResponse, name: string): string {
  const property = page.properties[name];
  if (property?.type === "rich_text") return plainText(property.rich_text);
  if (property?.type === "formula" && property.formula.type === "string") {
    return property.formula.string ?? "";
  }
  return "";
}

function dateProperty(page: PageObjectResponse): string | null {
  const property = page.properties["Published"];
  if (property?.type === "date") return property.date?.start?.slice(0, 10) ?? null;
  return null;
}

function multiSelectProperty(page: PageObjectResponse, name: string): string[] {
  const property = page.properties[name];
  return property?.type === "multi_select" ? property.multi_select.map((option) => option.name) : [];
}

/* ---------- files ---------- */

type NotionFile =
  | { type: "external"; external: { url: string } }
  | { type: "file"; file: { url: string } }
  | { type: string };

function fileUrl(value: NotionFile): string | null {
  if ("external" in value && value.external?.url) return value.external.url;
  if ("file" in value && value.file?.url) return value.file.url;
  return null;
}

async function coverAsset(page: PageObjectResponse, slug: string): Promise<Asset | null> {
  if (!page.cover) return null;
  const url = fileUrl(page.cover);
  return url ? downloadImage(url, slug, "") : null;
}

/**
 * Copies an image into public/notion/ and returns its local path.
 *
 * Notion serves uploaded files from signed S3 URLs that expire about an hour
 * after they are handed out. Linking straight to one would work for the length
 * of a deploy and then 403 for every reader after that, so every image has to
 * be pulled onto disk at build time.
 */
async function downloadImage(url: string, slug: string, alt: string): Promise<Asset | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const buffer = Buffer.from(await response.arrayBuffer());
    /* The signature query string changes on every fetch, so the hash covers the
       path only — an unchanged image keeps its filename across builds. */
    const key = createHash("sha256").update(`${slug}:${new URL(url).pathname}`).digest("hex").slice(0, 16);
    const extension = extensionFor(url, response.headers.get("content-type"));
    const filename = `${key}${extension}`;

    await mkdir(IMAGE_DIR, { recursive: true });
    await writeFile(path.join(IMAGE_DIR, filename), buffer);

    const size = imageSize(buffer);
    return {
      src: `${IMAGE_ROUTE}/${filename}`,
      width: size?.width ?? null,
      height: size?.height ?? null,
      alt,
    };
  } catch (error) {
    console.warn(`[notion] could not download ${url.split("?")[0]}: ${(error as Error).message}`);
    return null;
  }
}

function extensionFor(url: string, contentType: string | null): string {
  const fromUrl = path.extname(new URL(url).pathname).toLowerCase();
  if (/^\.(png|jpe?g|gif|webp|avif|svg)$/.test(fromUrl)) return fromUrl;

  const map: Record<string, string> = {
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "image/avif": ".avif",
    "image/svg+xml": ".svg",
  };
  return map[contentType?.split(";")[0].trim() ?? ""] ?? ".png";
}

/** Drops images from posts that are no longer published. */
async function pruneImages() {
  await rm(IMAGE_DIR, { recursive: true, force: true });
  await mkdir(IMAGE_DIR, { recursive: true });
}

/* ---------- misc ---------- */

function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/* Two posts sharing a slug would overwrite each other's file and silently drop
   one from the site, so later collisions get a numeric suffix. */
function uniqueSlug(base: string, seen: Set<string>): string {
  const root = base || "post";
  let slug = root;
  let suffix = 2;
  while (seen.has(slug)) slug = `${root}-${suffix++}`;
  seen.add(slug);
  return slug;
}

function countWords(blocks: Block[]): number {
  let total = 0;

  const walk = (list: Block[]) => {
    for (const block of list) {
      if ("spans" in block) total += wordsIn(block.spans);
      if (block.kind === "code") total += block.text.split(/\s+/).filter(Boolean).length;
      if ("children" in block) walk(block.children);
      if (block.kind === "list" || block.kind === "todo") {
        for (const item of block.items) {
          total += wordsIn(item.spans);
          walk(item.children);
        }
      }
      if (block.kind === "columns") block.columns.forEach(walk);
      if (block.kind === "table") {
        for (const row of block.rows) for (const cell of row) total += wordsIn(cell);
      }
    }
  };

  walk(blocks);
  return total;
}

function wordsIn(list: Span[]): number {
  return list
    .map((span) => span.text)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

main().catch((error) => {
  console.error("[notion] sync failed:", error);
  process.exit(1);
});
