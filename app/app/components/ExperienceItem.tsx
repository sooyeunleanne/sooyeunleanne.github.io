"use client";

import { useId, useState } from "react";
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
  summary,
  bullets,
  tags,
  defaultOpen = false,
}: {
  term: string;
  seasonIcon: IconDefinition;
  title: string;
  org: string;
  location: string;
  summary: string[];
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
          <span className="item-year">
            <FontAwesomeIcon icon={seasonIcon} aria-hidden="true" />
            {term}
          </span>
          <span className="item-location">{location}</span>
        </span>
        <span className="exp-headline">
          <span className="exp-title">
            {title} <span className="exp-divider" aria-hidden="true">|</span> <span className="exp-org">{org}</span>
          </span>
          <span className="exp-summary">
            {summary.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </span>
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
        <div>
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
    </article>
  );
}
