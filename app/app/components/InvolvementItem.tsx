"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { Involvement } from "../extracurriculars";

export function InvolvementItem({
  involvement,
  defaultOpen = false,
}: {
  involvement: Involvement;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const { org, logo, currentRole, headerNote, link, span, location, summary, roles, highlights } =
    involvement;
  // A lone role is already named by the header badge; only a progression earns the timeline.
  const showTimeline = roles.length > 1;

  return (
    <article className="involvement">
      {/* The toggle is a transparent overlay rather than a wrapper, so the link
          can sit above it — an anchor inside a button is invalid markup. */}
      <div className="involvement-header" data-open={open}>
        <button
          type="button"
          className="involvement-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${currentRole ?? "Details"} at ${org}`}
          onClick={() => setOpen((value) => !value)}
        />

        {logo && (
          <span className="involvement-logo">
            <Image src={logo.src} alt={`${org} logo`} width={logo.width} height={logo.height} />
          </span>
        )}
        <span className="involvement-headline">
          <span className="involvement-org">{org}</span>
          <span className="involvement-meta">
            {currentRole && <span className="involvement-badge">{currentRole}</span>}
            <span className="involvement-span">
              {span}
              {location && ` · ${location}`}
            </span>
          </span>
          {headerNote && <span className="involvement-note">{headerNote}</span>}
        </span>

        {link && (
          <a
            className="involvement-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${org} website in a new tab`}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
          </a>
        )}
        <FontAwesomeIcon className="involvement-chevron" icon={faChevronDown} aria-hidden="true" />
      </div>

      <div
        className="involvement-panel"
        id={panelId}
        data-open={open}
        role="region"
        aria-label={org}
        inert={!open}
      >
        <div>
          <div className="involvement-panel-inner">
            {summary && <p className="involvement-summary">{summary}</p>}

            {showTimeline && (
              <ol className="role-timeline">
                {roles.map((role) => (
                  <li key={`${role.title}-${role.period}`}>
                    <span className="role-title">{role.title}</span>
                    <span className="role-period">
                      {role.period} · {role.duration}
                    </span>
                  </li>
                ))}
              </ol>
            )}

            {highlights && (
              <ul className="item-bullets">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
