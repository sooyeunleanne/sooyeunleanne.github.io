import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

/**
 * Page frame for everything under /blog.
 *
 * The home page's sidebar navigates by in-page anchor (#work, #projects), which
 * resolves to nothing on a route of its own — so blog pages get a plain top bar
 * back to the portfolio instead of the section rail.
 */
export function BlogChrome({ children }: { children: ReactNode }) {
  return (
    <div className="blog-shell">
      <header className="blog-bar">
        <Link className="blog-bar-home" href="/">
          <span className="monogram">
            <Image src="/profile-pic-sm.png" alt="" width={160} height={160} />
          </span>
          <span className="blog-bar-name">{profile.name}</span>
        </Link>
        <nav className="blog-bar-nav" aria-label="Site">
          <Link href="/blog">Blog</Link>
          <Link href="/#about">Portfolio</Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="blog-main content-grid">{children}</main>
      <Footer />
    </div>
  );
}
