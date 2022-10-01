/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    podcastTitle: "Tech Writer Koduje",
  },
};

module.exports = nextConfig;
