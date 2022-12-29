const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'podcast-site';
const assetPrefix = isGithubActions ? `/${repo}` : undefined;
const basePath = isGithubActions ? `/${repo}` : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    podcastTitle: 'Tech Writer Koduje',
    contactEmail: 'techwriterkoduje@gmail.com',
    repo: isGithubActions ? `/${repo}/` : '',
  },
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
