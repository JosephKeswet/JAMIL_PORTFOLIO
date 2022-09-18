/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    disableStaticImages: true,
  },
}


// next.config.js
// const withImages = require('next-images')
// module.exports = withImages()