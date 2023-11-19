/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  env: {
    base_url:'https://badge42.coday.fr',
    github_repo:'https://github.com/Coday-meric/badge42'
  },
  output: 'standalone',
};

module.exports = nextConfig;
