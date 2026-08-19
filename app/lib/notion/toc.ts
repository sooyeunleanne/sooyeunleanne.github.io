/**
 * Heading extraction for the in-page table of contents.
 *
 * `anchor` lives here rather than in the renderer because two things have to
 * agree on it: the `id` NotionBlocks puts on a heading, and the `href` the TOC
 * points at. Drifting apart would silently break every link in the nav.
 */

import type { Block, Span } from "./types";

export type TocEntry = { id: string; level: 1 | 2 | 3; text: string };

/** Stable heading id so a post's sections are linkable. */
export function anchor(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function plain(spans: Span[]): string {
  return spans.map((span) => span.text).join("").trim();
}

/**
 * Every heading in the post, in document order — including ones nested inside
 * toggles, callouts, list items and columns, since those render as headings on
 * the page and a reader scrolling past them expects the nav to follow.
 */
export function collectHeadings(blocks: Block[]): TocEntry[] {
  const entries: TocEntry[] = [];

  const walk = (list: Block[]) => {
    for (const block of list) {
      switch (block.kind) {
        case "heading": {
          const text = plain(block.spans);
          const id = anchor(text);
          /* An empty or punctuation-only heading anchors to nothing, so it
             would be a dead link in the rail. */
          if (id) entries.push({ id, level: block.level, text });
          walk(block.children);
          break;
        }
        case "paragraph":
        case "quote":
        case "callout":
        case "toggle":
          walk(block.children);
          break;
        case "list":
        case "todo":
          block.items.forEach((item) => walk(item.children));
          break;
        case "columns":
          block.columns.forEach((column) => walk(column));
          break;
      }
    }
  };

  walk(blocks);
  return entries;
}
