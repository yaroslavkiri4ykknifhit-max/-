import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // ВАЖНО: Удали строчку basePath ниже, когда привяжешь свой собственный домен (например budeya.by)
  basePath: '/Budeya',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
