import Link from "next/link";
import { InteractiveMacBook } from "./components/InteractiveMacBook";

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="portfolio-nav">
        <Link className="portfolio-mark" href="/">LK<span>.</span></Link>
        <span className="portfolio-nav-note">A small world of digital things</span>
        <a className="portfolio-contact" href="mailto:hello@sooyeunleanne.com">Contact <span aria-hidden="true">↗</span></a>
      </header>
      <section className="portfolio-intro">
        <p className="eyebrow">Welcome, I&apos;m Leanne</p>
        <h1>Make room for<br /><em>good ideas.</em></h1>
        <p className="intro-copy">A portfolio for experiments, interfaces, and the in-between moments that make a screen feel human.</p>
      </section>
      <InteractiveMacBook />
      <footer className="portfolio-footer">
        <span>© 2026 Leanne Kim</span>
        <span>Built with curiosity</span>
      </footer>
    </main>
  );
}
