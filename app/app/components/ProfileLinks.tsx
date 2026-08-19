import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "../data";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: faEnvelope, external: false },
  { label: "LinkedIn", href: profile.links.linkedin, icon: faLinkedin, external: true },
  { label: "GitHub", href: profile.links.github, icon: faGithub, external: true },
  { label: "Resume", href: profile.links.resume, icon: faFileLines, external: true },
];

/** Shared by the hero and the sidebar so the two can't drift apart. */
export function ProfileLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
          {link.label}
        </a>
      ))}
    </div>
  );
}
