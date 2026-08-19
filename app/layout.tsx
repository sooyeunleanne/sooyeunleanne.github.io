import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leanne Kim | Digital experiences",
  description: "A portfolio for experiments, interfaces, and good ideas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
