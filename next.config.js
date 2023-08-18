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
            source: '/*',
            has: [
              {
                type: 'host',
                value: '(?!www\\.)(?<host>.+)',
              },
            ],
            permanent: true,
            destination: 'https://www.$host/:splat',
          },
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
        domains: ['cdn.activepieces.com','cloud.activepieces.com', 'auth.activepieces.com', 'ywkdmxjwsazhcvocivgw.supabase.co'],
    },
    experimental: {
      serverActions: true
    }
}

module.exports = nextConfig
