/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repositoryName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")
  : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions ? `/${repositoryName}` : "",
  assetPrefix: isGithubActions ? `/${repositoryName}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
