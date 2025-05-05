import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio', // GitHubリポジトリ名を指定
  assetPrefix: '/portfolio', // GitHubリポジトリ名を指定
};

export default nextConfig;
