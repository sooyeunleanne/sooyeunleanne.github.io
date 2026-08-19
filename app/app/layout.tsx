import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Next injects the stylesheet above itself; stop FA from also inlining it at runtime.
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Leanne Kim | Portfolio",
  description:
    "Portfolio of Leanne Kim, a Systems Design Engineering student at the University of Waterloo interested in full stack, software architecture, and DevOps.",
};

// Runs before first paint so a stored choice doesn't flash the wrong theme.
// No stored value leaves data-theme unset, which lets the OS preference apply.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
