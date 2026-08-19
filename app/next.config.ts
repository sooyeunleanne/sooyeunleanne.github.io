import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a fully static site to out/ — GitHub Pages serves files, not a server.
  output: "export",
  // No image optimization server exists to resize on request.
  images: { unoptimized: true },
  // Pages serves /about as /about/index.html, so emit directory-style routes.
  trailingSlash: true,
};

export default nextConfig;
