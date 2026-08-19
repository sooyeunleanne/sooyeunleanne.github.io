"use client";

import { useEffect, useState } from "react";
import { ProfileLinks } from "./ProfileLinks";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "../data";

type NavItem = { id: string; label: string };

export function Sidebar({
  initials,
  name,
  items,
}: {
  initials: string;
  name: string;
  items: NavItem[];
}) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-head">
          <a className="monogram" href="#about" aria-label={`${name} home`}>
            {initials}
          </a>
          <ThemeToggle />
        </div>
        <nav className="sidebar-nav" aria-label="Section navigation">
          {items.map((item, index) => (
            <a key={item.id} href={`#${item.id}`} data-active={active === item.id}>
              <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="sidebar-bottom">
        <ProfileLinks className="sidebar-socials" showEmail={false} />
        <a className="sidebar-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </aside>
  );
}
