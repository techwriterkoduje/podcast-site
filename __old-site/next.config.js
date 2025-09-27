/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PODCAST_TITLE: 'Tech Writer Koduje',
    CONTACT_EMAIL: 'techwriterkoduje@gmail.com',
    RSS_URL: 'https://anchor.fm/s/8afba9c/podcast/rss',
  },
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: 'nothing-here',
  },
};

module.exports = nextConfig;
