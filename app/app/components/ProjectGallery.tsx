"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "../projects";

function ProjectLink({ project, className }: { project: Project; className: string }) {
  if (!project.link) return null;
  return (
    <a
      className={className}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} in a new tab`}
    >
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
    </a>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    // The link sits beside the button rather than inside it — an anchor nested in
    // a button is invalid markup and swallows the wrong clicks.
    <article className="project-card">
      <button type="button" className="project-card-open" onClick={onOpen}>
        <span className="project-thumb">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 700px) 100vw, 320px"
            />
          ) : (
            <span className="project-thumb-fallback" aria-hidden="true">
              {project.title.charAt(0).toUpperCase()}
            </span>
          )}
        </span>
        <span className="project-body">
          <span className="project-title">{project.title}</span>
          {project.award && <span className="project-award">🏆 {project.award}</span>}
          <span className="project-blurb">{project.blurb}</span>
          <span className="project-stack">{project.stack.join(" · ")}</span>
        </span>
      </button>
      <ProjectLink project={project} className="project-link" />
    </article>
  );
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<Project | null>(null);
  const [closing, setClosing] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const detailId = useId();

  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);
  const visible = showAll ? [...featured, ...rest] : featured;

  // showModal() is what gives us the focus trap, Esc handling, and ::backdrop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  const open = (project: Project) => {
    setDetailOpen(false); // every project opens collapsed
    setClosing(false);
    setActive(project);
  };

  // Closing runs the exit animation first; animationend tears the dialog down.
  const requestClose = () => setClosing(true);

  return (
    <div className="project-gallery">
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={() => open(project)} />
        ))}
      </div>

      {rest.length > 0 && (
        <button type="button" className="project-more" onClick={() => setShowAll((value) => !value)}>
          {showAll ? "Show fewer" : `View more (${rest.length})`}
        </button>
      )}

      <dialog
        ref={dialogRef}
        className="project-dialog"
        data-closing={closing}
        onCancel={(event) => {
          // Esc would close instantly; run the exit animation instead.
          event.preventDefault();
          requestClose();
        }}
        onAnimationEnd={(event) => {
          if (event.animationName === "dialog-out") {
            setActive(null);
            setClosing(false);
          }
        }}
        onClose={() => {
          setActive(null);
          setClosing(false);
        }}
        onClick={(event) => {
          // The dialog element itself is the backdrop area; the panel sits inside it.
          if (event.target === dialogRef.current) requestClose();
        }}
      >
        {active && (
          <div className="project-dialog-panel">
            <button
              type="button"
              className="project-dialog-close"
              onClick={requestClose}
              aria-label="Close"
            >
              ✕
            </button>

            {active.image && (
              <div className="project-dialog-image">
                <Image
                  src={active.image}
                  alt={`${active.title} preview`}
                  fill
                  sizes="(max-width: 700px) 100vw, 640px"
                />
              </div>
            )}

            <div className="project-dialog-body">
              <div className="project-dialog-head">
                <h3>{active.title}</h3>
                <ProjectLink project={active} className="project-dialog-link" />
              </div>
              {active.award && <p className="project-award">🏆 {active.award}</p>}
              <p className="project-blurb">{active.blurb}</p>

              <button
                type="button"
                className="project-detail-toggle"
                aria-expanded={detailOpen}
                aria-controls={detailId}
                onClick={() => setDetailOpen((value) => !value)}
              >
                What I did
                <FontAwesomeIcon icon={faChevronDown} aria-hidden="true" />
              </button>
              <div className="project-detail-panel" id={detailId} data-open={detailOpen} inert={!detailOpen}>
                <div>
                  {active.highlights && (
                    <ul className="item-bullets">
                      {active.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  {active.detail && <p className="project-detail">{active.detail}</p>}
                </div>
              </div>

              <div className="tag-list">
                {active.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
