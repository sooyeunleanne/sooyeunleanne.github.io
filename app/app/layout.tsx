import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { profile } from "@/data/profile";

// Next injects the stylesheet above itself; stop FA from also inlining it at runtime.
config.autoAddCss = false;

const siteUrl = "https://sooyeunleanne.github.io";
const title = `${profile.name} | Software Engineer`;
const description = `${profile.program} student at the ${profile.school}, specializing in Software Engineering. Interested in full stack, software architecture, and DevOps.`;

export const metadata: Metadata = {
  // Resolves the relative URLs below against the deployed origin.
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Systems Design Engineering",
    "University of Waterloo",
    "software engineer",
    "full stack",
    "software architecture",
    "DevOps",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title,
    description,
    locale: "en_CA",
  },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
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
