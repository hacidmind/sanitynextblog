/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["via.placeholder.com", "cdn.sanity.io", 'techstudioacademy.com']
  },
}

module.exports = nextConfig
