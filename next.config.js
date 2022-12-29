const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'podcast-site';
const assetPrefix = isGithubActions ? `./` : '';
const basePath = isGithubActions ? `/${repo}` : '';

console.log('RUNNING ON GITHUB ACTIONS?', isGithubActions);

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
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
