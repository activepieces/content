/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/plans',
            destination: '/pricing',
            permanent: true,
          },
        ]
      },
    images: {
        domains: ['cdn.activepieces.com','cloud.activepieces.com'],
    },
}

module.exports = nextConfig
