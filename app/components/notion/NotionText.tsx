import { Fragment } from "react";
import type { Span } from "@/lib/notion/types";

/**
 * Renders one run of Notion rich text, preserving the annotations that carry
 * meaning in a post: bold, italic, strikethrough, underline, inline code, links
 * and colour. This is what keeps a paragraph reading the way it does in Notion.
 */
export function NotionText({ spans }: { spans: Span[] }) {
  return (
    <>
      {spans.map((span, index) => (
        <Fragment key={index}>{renderSpan(span)}</Fragment>
      ))}
    </>
  );
}

function renderSpan(span: Span) {
  /* Inline equations arrive with the rendered LaTeX in plain_text and the source
     alongside it. Without a maths renderer the source is the honest thing to
     show, marked up as code so it reads as notation rather than prose. */
  if (span.equation) {
    return <code className="prose-equation">{span.equation}</code>;
  }

  let node = <>{span.text}</>;

  if (span.annotations.code) node = <code>{node}</code>;
  if (span.annotations.bold) node = <strong>{node}</strong>;
  if (span.annotations.italic) node = <em>{node}</em>;
  if (span.annotations.strikethrough) node = <s>{node}</s>;
  if (span.annotations.underline) node = <u>{node}</u>;

  if (span.annotations.color !== "default") {
    node = <span className={colorClass(span.annotations.color)}>{node}</span>;
  }

  if (span.href) {
    return (
      <a className="prose-link" href={span.href} target="_blank" rel="noreferrer">
        {node}
      </a>
    );
  }

  return node;
}

/** "blue" → notion-blue, "blue_background" → notion-blue-bg. */
export function colorClass(color: string): string {
  return color.endsWith("_background")
    ? `notion-${color.replace("_background", "")}-bg`
    : `notion-${color}`;
}
