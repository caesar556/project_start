import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow all hosts for Replit proxy
  allowedDevOrigins: ["*"],
};

export default nextConfig;
