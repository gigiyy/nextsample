import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/dtr/:path*',
        destination: 'http://localhost:8080/dtr/:path*',
      },
    ]
  }
};

export default nextConfig;
