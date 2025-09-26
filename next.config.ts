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
  },
};

export default nextConfig;
