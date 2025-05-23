import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true, // SWC is the default compiler and this option is deprecated/removed
  env: {
    PODCAST_TITLE: 'Tech Writer Koduje',
    CONTACT_EMAIL: 'techwriterkoduje@gmail.com',
    RSS_URL: 'https://anchor.fm/s/8afba9c/podcast/rss',
  },
  images: {
    unoptimized: true,
    // loader: 'akamai', // loader 'akamai' is deprecated.
    // path: 'nothing-here', // path is deprecated.
    // For static export, unoptimized: true is the main setting.
    // If using a CDN or custom image solution, configure it appropriately.
    // For now, removing deprecated loader and path.
  },
  output: 'export',
};

export default config;
