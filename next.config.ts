import type { NextConfig } from "next";

const repoName = "Liz_Nonprofit";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  output: "export",

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;