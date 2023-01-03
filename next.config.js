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
    PODCAST_TITLE: 'Tech Writer Koduje',
    CONTACT_EMAIL: 'techwriterkoduje@gmail.com',
    REPO: `/${repo}/`,
    RSS_URL: 'https://anchor.fm/s/8afba9c/podcast/rss',
  },
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
