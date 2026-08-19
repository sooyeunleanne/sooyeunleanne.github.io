/**
 * The shape `scripts/sync-notion.ts` writes to `content/posts/` and the blog
 * pages read back. Deliberately decoupled from `@notionhq/client`'s response
 * types: the SDK only ever runs at build time, so nothing under `app/` has to
 * know about Notion's wire format, and a Notion API change can be absorbed in
 * the sync script alone.
 */

export type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  /** Notion's colour name, e.g. "default", "blue", "red_background". */
  color: string;
};

/** One run of text with uniform formatting — Notion's rich text atom. */
export type Span = {
  text: string;
  href: string | null;
  annotations: Annotations;
  /** Set when the span is an inline KaTeX equation rather than plain text. */
  equation?: string;
};

/** An image pulled onto disk at sync time; `src` is a path under /notion/. */
export type Asset = {
  src: string;
  width: number | null;
  height: number | null;
  alt: string;
};

export type ListItem = { id: string; spans: Span[]; children: Block[] };
export type TodoItem = ListItem & { checked: boolean };

type BlockBody =
  | { kind: "paragraph"; spans: Span[]; children: Block[] }
  | { kind: "heading"; level: 1 | 2 | 3; spans: Span[]; children: Block[]; toggleable: boolean }
  /* Notion emits one block per bullet; the sync script groups runs of them so
     the renderer can emit a single <ul>/<ol> instead of a list per item. */
  | { kind: "list"; ordered: boolean; items: ListItem[] }
  | { kind: "todo"; items: TodoItem[] }
  | { kind: "quote"; spans: Span[]; children: Block[] }
  | { kind: "callout"; spans: Span[]; icon: string | null; color: string; children: Block[] }
  | { kind: "toggle"; spans: Span[]; children: Block[] }
  | { kind: "code"; text: string; language: string; caption: Span[] }
  | { kind: "image"; asset: Asset; caption: Span[] }
  | { kind: "video"; src: string; caption: Span[] }
  | { kind: "bookmark"; url: string; caption: Span[] }
  | { kind: "embed"; url: string; caption: Span[] }
  | { kind: "file"; url: string; name: string; caption: Span[] }
  | { kind: "equation"; expression: string }
  | { kind: "columns"; columns: Block[][] }
  | { kind: "table"; hasColumnHeader: boolean; hasRowHeader: boolean; rows: Span[][][] }
  | { kind: "divider" }
  /* Rendered as nothing. Keeping the type name means an unhandled block shows up
     in the sync log rather than silently vanishing or breaking the build. */
  | { kind: "unsupported"; type: string };

export type Block = { id: string } & BlockBody;

/** Everything the index needs, without paying to load a post's whole body. */
export type PostMeta = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  /** ISO date (yyyy-mm-dd) from the Published property, or the page's created date. */
  date: string;
  tags: string[];
  cover: Asset | null;
  readingMinutes: number;
};

export type Post = PostMeta & { blocks: Block[] };
