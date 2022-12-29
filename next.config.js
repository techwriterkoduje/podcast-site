const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo =
  process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') | 'podcast-site';
const assetPrefix = isGithubActions
  ? `https://techwriterkoduje.github.io/${repo}/`
  : '';
const basePath = isGithubActions ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    podcastTitle: 'Tech Writer Koduje',
    contactEmail: 'techwriterkoduje@gmail.com',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
