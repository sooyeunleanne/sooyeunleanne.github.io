import { profile } from "../data";

export function Footer() {
  return (
    <footer className="footer content-grid">
      <div>
        <p className="eyebrow">Have a question, idea, or good book?</p>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          {profile.email} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  );
}
