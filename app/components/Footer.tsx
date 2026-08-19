import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer content-grid">
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  );
}
