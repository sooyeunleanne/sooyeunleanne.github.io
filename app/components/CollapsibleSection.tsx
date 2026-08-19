"use client";

import { useId, useState, type ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * Turns a page section's heading into an accordion control, reusing the row-track
 * collapse the work and involvement cards already use. Sections start open — the
 * page should read as a whole until the visitor decides to fold something away.
 */
export function CollapsibleSection({
  id,
  number,
  title,
  className,
  children,
}: {
  id: string;
  number: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(true);
  /* The panel has to clip while the row track animates or the content spills past
     the shrinking box. Clipping is dropped again once the transition settles, so
     card hover lifts and focus rings aren't cut off at the panel edge. */
  const [settled, setSettled] = useState(true);
  const panelId = useId();

  return (
    <section className={`section content-grid${className ? ` ${className}` : ""}`} id={id}>
      {/* The h2 stays the landmark and the button inside it takes the click, which
          keeps a heading out of the button's phrasing-only content model. */}
      <h2 className="section-heading">
        <button
          type="button"
          className="section-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => {
            setOpen((value) => !value);
            setSettled(false);
          }}
        >
          <span className="section-number">{number}</span>
          <span className="section-title">{title}</span>
          <FontAwesomeIcon className="section-chevron" icon={faChevronDown} aria-hidden="true" />
        </button>
      </h2>

      <div
        className="section-panel"
        id={panelId}
        data-open={open}
        data-settled={settled}
        role="region"
        aria-label={title}
        inert={!open}
        // Transitions bubbling up from the content aren't the row track finishing.
        onTransitionEnd={(event) => {
          if (event.target === event.currentTarget) setSettled(true);
        }}
      >
        <div>{children}</div>
      </div>
    </section>
  );
}
