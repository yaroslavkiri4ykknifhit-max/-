import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryBasePath = isGitHubPages ? '/-' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repositoryBasePath,
  assetPrefix: repositoryBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
