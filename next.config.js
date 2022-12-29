/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    podcastTitle: 'Tech Writer Koduje',
    contactEmail: 'techwriterkoduje@gmail.com',
  },
};

module.exports = nextConfig;
