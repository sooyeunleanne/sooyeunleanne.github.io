import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minh Anh Nguyen | Academic Portfolio",
  description: "Academic portfolio of Minh Anh Nguyen, a computer science and public policy researcher.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
