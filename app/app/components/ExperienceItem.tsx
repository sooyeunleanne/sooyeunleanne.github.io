"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { RichText } from "./RichText";

export function ExperienceItem({
  term,
  seasonIcon,
  title,
  org,
  location,
  logo,
  summary,
  overview,
  bullets,
  tags,
  defaultOpen = false,
}: {
  term: string;
  seasonIcon: IconDefinition;
  title: string;
  org: string;
  location: string;
  logo: { src: string; width: number; height: number; scale?: number };
  summary: string[];
  overview: string;
  bullets: string[];
  tags: string[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <article className="exp-item">
      <button
        type="button"
        className="exp-header"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="item-meta">
          <span className="exp-logo" style={{ "--logo-scale": logo.scale ?? 0.8 } as React.CSSProperties}>
            <Image src={logo.src} alt={`${org} logo`} width={logo.width} height={logo.height} />
          </span>
          <span className="item-year">
            {term}
          </span>
          <span className="item-location">{location}</span>
        </span>
        <span className="exp-headline">
          <span className="exp-title">
            {title} <span className="exp-divider" aria-hidden="true">|</span> <span className="exp-org">{org}</span>
          </span>
          {open ? (
            <span className="exp-overview">{overview}</span>
          ) : (
            <span className="exp-summary">
              {summary.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </span>
          )}
        </span>
        <FontAwesomeIcon className="exp-chevron" icon={faChevronDown} aria-hidden="true" />
      </button>

      <div
        className="exp-panel"
        id={panelId}
        data-open={open}
        role="region"
        aria-label={`${title} at ${org}`}
        inert={!open}
      >
        {/* The animating child must stay padding-free, so spacing lives on the
            inner wrapper — otherwise padding holds the collapsed panel open. */}
        <div>
          <div className="exp-panel-inner">
            <ul className="item-bullets">
              {bullets.map((bullet) => (
                <li key={bullet}>
                  <RichText>{bullet}</RichText>
                </li>
              ))}
            </ul>
            <div className="tag-list">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
