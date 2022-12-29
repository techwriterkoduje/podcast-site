const repo = 'podcast-site';
const assetPrefix = `/${repo}`;
const basePath = `/${repo}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    podcastTitle: 'Tech Writer Koduje',
    contactEmail: 'techwriterkoduje@gmail.com',
    repo: `/${repo}/`,
  },
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
