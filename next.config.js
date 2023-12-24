/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com', 'cdn.marvel.com']
  },
  env: {
    API_ENDPOINT: 'https://entrega-final-ian-ortiz.vercel.app'
  }
}

module.exports = nextConfig
