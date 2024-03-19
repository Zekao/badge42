/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  env: {
    base_url:'https://badge.nimon.fr',
    github_repo:'https://github.com/Nimon77/badge42'
  },
  output: 'standalone',
};

module.exports = nextConfig;
