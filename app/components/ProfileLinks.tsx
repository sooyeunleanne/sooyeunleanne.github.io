import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "@/data/profile";
import { CopyEmail } from "@/components/CopyEmail";

const links = [
  { label: "LinkedIn", href: profile.links.linkedin, icon: faLinkedin },
  { label: "GitHub", href: profile.links.github, icon: faGithub },
  { label: "Resume", href: profile.links.resume, icon: faFileLines },
];

/**
 * Shared by the hero and the sidebar so the two can't drift apart. The sidebar
 * hides the email control because it prints the address in full underneath.
 */
export function ProfileLinks({
  className,
  showEmail = true,
}: {
  className: string;
  showEmail?: boolean;
}) {
  return (
    <div className={className}>
      {showEmail && <CopyEmail email={profile.email} />}
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
          {link.label}
        </a>
      ))}
    </div>
  );
}
