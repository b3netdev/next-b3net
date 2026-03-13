import type { NextConfig } from "next";

const domain = new URL(process.env.NEXT_PUBLIC_BASE_URL || "").hostname;

const nextConfig: NextConfig = {
  images: {
    domains: [domain],
  },
};

export default nextConfig;