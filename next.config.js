/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['links.papareact.com'] },
  env: {
    mapbox_key: 'pk.eyJ1IjoibW9oYW1tYWRhYmR1bGxhaDAxIiwiYSI6ImNsNmZhcnhnNTA3bGwza3BtbnlxOTNpcnEifQ.pMxFHyP19hdY7bfKlmqtSA'
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
