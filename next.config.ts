import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // 画像の最適化をオフにするか、静的対応に切り替え
  images: {
    unoptimized: true,
  },
  // ベースパスが必要な場合（GitHubPages等）
  // basePath: '/portfolio',
};

export default nextConfig;
