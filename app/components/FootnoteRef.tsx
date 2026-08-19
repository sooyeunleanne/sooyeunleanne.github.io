"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { footnotes } from "@/data/footnotes";
import { RichText } from "@/components/RichText";

/** Space between the marker and the panel, and the panel's minimum inset from the viewport. */
const GAP = 9;
const MARGIN = 12;

type Placement = { top: number; left: number; side: "top" | "bottom" };

/**
 * Below the marker by default: it reads in the same direction as the prose and
 * stays clear of the sticky top bar the tablet layout puts at the top of the
 * screen. Flips above only when the panel would run off the bottom.
 */
function place(marker: DOMRect, panel: DOMRect): Placement {
  const centred = marker.left + marker.width / 2 - panel.width / 2;
  const left = Math.min(Math.max(centred, MARGIN), window.innerWidth - panel.width - MARGIN);

  const fitsBelow = marker.bottom + GAP + panel.height <= window.innerHeight - MARGIN;
  const top = fitsBelow
    ? marker.bottom + GAP
    : Math.max(marker.top - panel.height - GAP, MARGIN);

  return { top, left, side: fitsBelow ? "bottom" : "top" };
}

export function FootnoteRef({ id }: { id: number }) {
  const note = footnotes.find((entry) => entry.id === id);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Placement | null>(null);
  const markerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  /* Touch fires pointerenter too, so hover has to be gated on the device that
     actually hovers; everything else opens on tap instead. */
  const pointer = useRef("");
  const panelId = useId();

  const show = useCallback(() => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);

  /* Position is dropped along with the panel so the next open measures afresh
     rather than flashing at wherever the previous marker sat. */
  const close = useCallback(() => {
    clearTimeout(closeTimer.current);
    setOpen(false);
    setPosition(null);
  }, []);

  /* A grace period lets the pointer cross the gap into the panel to read or
     select the note without it vanishing on the way. */
  const hide = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(close, 140);
  }, [close]);

  const reposition = useCallback(() => {
    const marker = markerRef.current;
    const panel = panelRef.current;
    if (!marker || !panel) return;
    setPosition(place(marker.getBoundingClientRect(), panel.getBoundingClientRect()));
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return;
    reposition();

    let frame = 0;
    const track = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(reposition);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (markerRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      close();
    };

    // Capture, so the panel also follows scrolling inside any nested scroller.
    window.addEventListener("scroll", track, true);
    window.addEventListener("resize", track);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", track, true);
      window.removeEventListener("resize", track);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, reposition, close]);

  if (!note) return null;

  return (
    <>
      <button
        type="button"
        ref={markerRef}
        className="footnote-ref"
        aria-label={`Note: ${note.label}`}
        aria-describedby={open ? panelId : undefined}
        onPointerDown={(event) => {
          pointer.current = event.pointerType;
        }}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") show();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") hide();
        }}
        /* A tap focuses the marker before it clicks it, which would open the
           panel and then let the click toggle it straight back shut. Only a
           keyboard focus matches :focus-visible on a button, so gating on it
           leaves the tap to the click handler alone. */
        onFocus={(event) => {
          if (event.currentTarget.matches(":focus-visible")) show();
        }}
        onBlur={hide}
        // Hover already handles the mouse; a click there would only close it again.
        onClick={() => {
          if (pointer.current === "mouse") return;
          if (open) close();
          else show();
        }}
      >
        [{id}]
      </button>

      {open &&
        createPortal(
          <div
            ref={panelRef}
            id={panelId}
            role="tooltip"
            className="footnote-pop"
            data-side={position?.side ?? "bottom"}
            // Measured on the first paint, so it stays hidden until it has a home.
            style={
              position
                ? { top: position.top, left: position.left }
                : { top: 0, left: 0, visibility: "hidden" }
            }
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") show();
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") hide();
            }}
          >
            <span className="footnote-label">{note.label}</span>
            {note.body && (
              <span className="footnote-body">
                <RichText>{note.body}</RichText>
              </span>
            )}
            {note.items && (
              <ul className="footnote-items">
                {note.items.map((item) => (
                  <li key={item}>
                    <RichText>{item}</RichText>
                  </li>
                ))}
              </ul>
            )}
            {note.places && (
              <span className="place-list">
                {note.places.map((entry) => (
                  <span className="place" key={entry.country}>
                    <span className="place-flag" aria-hidden="true">
                      {entry.flag}
                    </span>
                    {entry.country}
                    {entry.cities && <span className="place-cities"> ({entry.cities})</span>}
                  </span>
                ))}
              </span>
            )}
            {note.outro && <span className="footnote-outro">{note.outro}</span>}
          </div>,
          document.body
        )}
    </>
  );
}
