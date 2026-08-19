"use client";

import { useEffect, useState } from "react";
import type { TocEntry } from "@/lib/notion/toc";

/**
 * Notion's in-page nav: a stack of dashes pinned to the right edge, one per
 * heading, that expands into the section titles on hover or keyboard focus and
 * tracks which section you're reading.
 *
 * The rail is aria-hidden — it's a decorative echo of the panel, which holds the
 * real links. Hiding the panel with opacity rather than `display` keeps those
 * links in the tab order, so `:focus-within` can reveal it for keyboard users.
 */
export function PostToc({ entries }: { entries: TocEntry[] }) {
  const [active, setActive] = useState(entries[0]?.id);

  useEffect(() => {
    const headings = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    /* A scroll listener rather than IntersectionObserver: the active section is
       "the last heading above the reading line", which stays correct when no
       heading is on screen at all — the common case inside a long section. */
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current = headings[0];
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > line) break;
        current = heading;
      }
      setActive(current.id);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [entries]);

  return (
    <nav className="post-toc" aria-label="On this page">
      <ul className="post-toc-rail" aria-hidden="true">
        {entries.map((entry) => (
          <li key={entry.id} data-level={entry.level} data-active={active === entry.id} />
        ))}
      </ul>

      <div className="post-toc-panel">
        <p className="post-toc-title">On this page</p>
        <ul>
          {entries.map((entry) => (
            <li key={entry.id} data-level={entry.level}>
              <a
                href={`#${entry.id}`}
                data-active={active === entry.id}
                aria-current={active === entry.id ? "location" : undefined}
              >
                {entry.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
