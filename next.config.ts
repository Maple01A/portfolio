import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // この設定が正しい
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
