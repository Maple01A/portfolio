import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的エクスポートの設定
  output: "export",
  
  // 画像の設定
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    domains: ['placehold.co'],
  },
  
  // AWS Amplifyのビルドプロセスでの設定
  // GitHub Pages用の設定（必要な場合のみ）
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
};

export default nextConfig;
