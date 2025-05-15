import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ['placehold.co'], // プレースホルダー画像のドメインを許可
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
  // AWS Amplifyでのビルドでは、basePath とassetPrefix を削除または空に
  basePath: '',  // GitHub Pagesでのみ '/portfolio' を使用
  assetPrefix: '', // GitHub Pagesでのみ '/portfolio' を使用
};

export default nextConfig;
