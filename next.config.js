/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        destination: "https://activepieces.mintlify.dev/docs/:path*",
        basePath: '/docs',
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
        source: '/pieces-roadmap',
        destination: 'https://community.activepieces.com/c/feature-requests/9',
        permanent: true
      },
      {
        source: '/request-a-piece',
        destination: 'https://community.activepieces.com/c/feature-requests/9',
        permanent: true,
      }
    ]
  },
  basePath: '',
  images: {
    domains: ['cdn.activepieces.com', 'cloud.activepieces.com', 'auth.activepieces.com', 'ywkdmxjwsazhcvocivgw.supabase.co'],
  },
  experimental: {
    serverActions: true
  },
  staticPageGenerationTimeout: 300
}

module.exports = nextConfig
