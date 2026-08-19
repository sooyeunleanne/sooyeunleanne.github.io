"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

/**
 * Both icons render and CSS reveals the right one from `data-theme`, so there is
 * no client state to mismatch during hydration and no flash before JS loads.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing can reject writes; the toggle still works for this visit.
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <FontAwesomeIcon className="theme-icon-moon" icon={faMoon} aria-hidden="true" />
      <FontAwesomeIcon className="theme-icon-sun" icon={faSun} aria-hidden="true" />
    </button>
  );
}
