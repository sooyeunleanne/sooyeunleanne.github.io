import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Post, PostMeta } from "@/lib/notion/types";

/**
 * Reads what `scripts/sync-notion.ts` left in `content/posts/`.
 *
 * Server-only and build-time only — the export has no runtime, so these run
 * while Next prerenders and never ship to the browser.
 */

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export async function getPostIndex(): Promise<PostMeta[]> {
  try {
    const raw = await readFile(path.join(POSTS_DIR, "index.json"), "utf8");
    return JSON.parse(raw) as PostMeta[];
  } catch {
    /* No index means the sync never ran (no credentials, fresh clone). An empty
       blog is the right outcome there — failing the build is not. */
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const raw = await readFile(path.join(POSTS_DIR, `${slug}.json`), "utf8");
    return JSON.parse(raw) as Post;
  } catch {
    return null;
  }
}

/** Long form for a post page, e.g. "14 March 2026". */
export function formatDate(iso: string): string {
  // Parsed as UTC so a date-only string doesn't shift a day in western zones.
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
