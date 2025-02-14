import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "arquivos.devnx.com.br",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
