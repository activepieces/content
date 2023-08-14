/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async rewrites() {
      return [
        {
          source: "/docs/:path*",
          destination: "https://activepieces.mintlify.dev/docs/:path*",
        },
      ];
    },
    async redirects() {
        return [
          {
            source: '/plans',
            destination: '/pricing',
            permanent: true,
          },
          {
            source: '/request-a-piece',
            destination: '/pieces-roadmap',
            permanent: true,
          }
        ]
      },
    images: {
        domains: ['cdn.activepieces.com','cloud.activepieces.com'],
    },
    experimental: {
      serverActions: true
    }
}

module.exports = nextConfig
