"use client";

import { useEffect, useState } from "react";

type NavItem = { id: string; label: string };

export function Sidebar({
  initials,
  name,
  email,
  links,
  items,
}: {
  initials: string;
  name: string;
  email: string;
  links: { linkedin: string; github: string; scholar: string };
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
        <a className="monogram" href="#about" aria-label={`${name} home`}>
          {initials}
        </a>
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
        <a className="sidebar-contact" href={`mailto:${email}`}>
          Say hello <span aria-hidden="true">↗</span>
        </a>
        <div className="sidebar-socials">
          <a href={links.linkedin}>LinkedIn</a>
          <a href={links.github}>GitHub</a>
          <a href={links.scholar}>Scholar</a>
        </div>
      </div>
    </aside>
  );
}
