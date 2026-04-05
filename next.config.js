/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove basePath if deploying to username.github.io
  // Add basePath: '/repo-name' if deploying to username.github.io/repo-name
  // basePath: '/mansi-portfolio',
}

module.exports = nextConfig
