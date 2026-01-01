import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.picard.replit.dev",
    "*.kirk.replit.dev",
    "*.janeway.replit.dev",
    "*.spock.replit.dev",
    "*.riker.replit.dev",
    "*.replit.dev",
    "*.repl.co",
  ],
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
