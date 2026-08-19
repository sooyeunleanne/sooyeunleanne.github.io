import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This site ships as a static build to GitHub Pages, where there is no
  // image optimization server to resize on request.
  images: { unoptimized: true },
};

export default nextConfig;
