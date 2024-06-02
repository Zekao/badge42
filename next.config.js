/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  env: {
    base_url:'https://badge.emaugale.com',
    github_repo:'https://github.com/Zekao/badge42'
  },
  output: 'standalone',
};

module.exports = nextConfig;
