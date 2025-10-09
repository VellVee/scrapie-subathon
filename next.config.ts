import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable Image Optimization to avoid Vercel Image Transformations
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-cdn.jtvnw.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pngimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "toppng.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.citypng.com",
        pathname: "/**",
      },
    ],
  },
  // Compress HTML and CSS output
  compress: true,
  // Performance optimization
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
