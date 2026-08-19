import Image from "next/image";
import type { Block, ListItem, Span, TodoItem } from "@/lib/notion/types";
import { anchor } from "@/lib/notion/toc";
import { NotionText, colorClass } from "@/components/notion/NotionText";

/** Renders a post body. Server component — no interactivity beyond <details>. */
export function NotionBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block) => (
        <NotionBlock key={block.id} block={block} />
      ))}
    </>
  );
}

function NotionBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case "paragraph":
      /* Notion uses empty paragraphs as spacing; an empty <p> would collapse, so
         they are dropped and the prose rhythm comes from CSS margins instead. */
      if (block.spans.length === 0 && block.children.length === 0) return null;
      return (
        <>
          <p>
            <NotionText spans={block.spans} />
          </p>
          <Nested blocks={block.children} />
        </>
      );

    case "heading": {
      const Tag = (["h2", "h3", "h4"] as const)[block.level - 1];
      const heading = (
        <Tag id={anchor(block.spans.map((span) => span.text).join(""))}>
          <NotionText spans={block.spans} />
        </Tag>
      );

      if (!block.toggleable) {
        return (
          <>
            {heading}
            <Nested blocks={block.children} />
          </>
        );
      }
      return (
        <details className="prose-toggle">
          <summary>{heading}</summary>
          <Nested blocks={block.children} />
        </details>
      );
    }

    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className={block.ordered ? "prose-ol" : "prose-ul"}>
          {block.items.map((item: ListItem) => (
            <li key={item.id}>
              <NotionText spans={item.spans} />
              <Nested blocks={item.children} />
            </li>
          ))}
        </Tag>
      );
    }

    case "todo":
      return (
        <ul className="prose-todo">
          {block.items.map((item: TodoItem) => (
            <li key={item.id} data-checked={item.checked}>
              {/* Read-only mirror of the Notion checkbox, so it is not a control. */}
              <span className="prose-todo-box" aria-hidden="true" />
              <span className="prose-todo-label">
                <NotionText spans={item.spans} />
                <Nested blocks={item.children} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote className="prose-quote">
          <NotionText spans={block.spans} />
          <Nested blocks={block.children} />
        </blockquote>
      );

    case "callout":
      return (
        <aside className={`prose-callout ${colorClass(block.color)}`}>
          {block.icon && (
            <span className="prose-callout-icon" aria-hidden="true">
              {block.icon}
            </span>
          )}
          <div>
            <NotionText spans={block.spans} />
            <Nested blocks={block.children} />
          </div>
        </aside>
      );

    case "toggle":
      return (
        <details className="prose-toggle">
          <summary>
            <NotionText spans={block.spans} />
          </summary>
          <Nested blocks={block.children} />
        </details>
      );

    case "code":
      return (
        <figure className="prose-code">
          <pre data-language={block.language}>
            <code>{block.text}</code>
          </pre>
          <Caption spans={block.caption} />
        </figure>
      );

    case "image":
      return (
        <figure className="prose-figure">
          {block.asset.width && block.asset.height ? (
            <Image
              src={block.asset.src}
              alt={block.asset.alt}
              width={block.asset.width}
              height={block.asset.height}
              sizes="(max-width: 760px) 100vw, 700px"
            />
          ) : (
            /* Dimensions are unknown for formats the header sniffer skips (SVG,
               AVIF); next/image demands them, so those fall back to a plain img. */
            // eslint-disable-next-line @next/next/no-img-element
            <img src={block.asset.src} alt={block.asset.alt} loading="lazy" />
          )}
          <Caption spans={block.caption} />
        </figure>
      );

    case "video":
      return (
        <figure className="prose-figure">
          {/^https?:\/\/[^/]*(youtube\.com|youtu\.be|vimeo\.com)/.test(block.src) ? (
            <a className="prose-bookmark" href={block.src} target="_blank" rel="noreferrer">
              <span className="prose-bookmark-label">Watch video</span>
              <span className="prose-bookmark-url">{block.src}</span>
            </a>
          ) : (
            <video src={block.src} controls preload="metadata" />
          )}
          <Caption spans={block.caption} />
        </figure>
      );

    case "bookmark":
    case "embed":
      return (
        <figure className="prose-figure">
          <a className="prose-bookmark" href={block.url} target="_blank" rel="noreferrer">
            <span className="prose-bookmark-label">{hostname(block.url)}</span>
            <span className="prose-bookmark-url">{block.url}</span>
          </a>
          <Caption spans={block.caption} />
        </figure>
      );

    case "file":
      return (
        <p>
          <a className="prose-link" href={block.url} target="_blank" rel="noreferrer">
            {block.name}
          </a>
        </p>
      );

    case "equation":
      return (
        <pre className="prose-equation-block">
          <code>{block.expression}</code>
        </pre>
      );

    case "columns":
      return (
        <div className="prose-columns" style={{ "--columns": block.columns.length } as React.CSSProperties}>
          {block.columns.map((column, index) => (
            <div key={index}>
              <NotionBlocks blocks={column} />
            </div>
          ))}
        </div>
      );

    case "table": {
      const head = block.hasColumnHeader ? block.rows[0] : null;
      const body = block.hasColumnHeader ? block.rows.slice(1) : block.rows;
      return (
        <div className="prose-table-scroll">
          <table className="prose-table">
            {head && (
              <thead>
                <tr>
                  {head.map((cell, index) => (
                    <th key={index}>
                      <NotionText spans={cell} />
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) =>
                    block.hasRowHeader && cellIndex === 0 ? (
                      <th key={cellIndex} scope="row">
                        <NotionText spans={cell} />
                      </th>
                    ) : (
                      <td key={cellIndex}>
                        <NotionText spans={cell} />
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case "divider":
      return <hr className="prose-divider" />;

    /* A block type the sync script has no branch for. It is logged during sync;
       rendering nothing beats crashing a page over one unusual block. */
    case "unsupported":
      return null;
  }
}

function Nested({ blocks }: { blocks: Block[] }) {
  if (blocks.length === 0) return null;
  return (
    <div className="prose-nested">
      <NotionBlocks blocks={blocks} />
    </div>
  );
}

function Caption({ spans }: { spans: Span[] }) {
  if (spans.length === 0) return null;
  return (
    <figcaption>
      <NotionText spans={spans} />
    </figcaption>
  );
}

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
