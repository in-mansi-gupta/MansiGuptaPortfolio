/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/MansiGuptaPortfolio',
  assetPrefix: '/MansiGuptaPortfolio/',
}

module.exports = nextConfig
