import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // 24 hours
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  swcMinify: true,
  // Compress HTML and CSS output
  compress: true,
  // Performance optimization
  poweredByHeader: false,
  reactStrictMode: true,
  // Font optimization
  optimizeFonts: true,
};

export default nextConfig;
