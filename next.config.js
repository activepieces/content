/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/plans',
            destination: '/pricing',
            permanent: true,
          },
          {
            source: '/docs',
            destination: 'https://activepieces.mintlify.dev/docs/getting-started/introduction',
            permanent: true,
          },
        ]
      },
    images: {
        domains: ['cdn.activepieces.com','cloud.activepieces.com'],
    },
}

module.exports = nextConfig
