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
        source: '/:path*',
        has: [{ type: 'host', value: 'activepieces.com' }],
        destination: 'https://www.activepieces.com/:path*',
        permanent: true
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
    unoptimized: true,
    domains: ['cdn.activepieces.com', 'cloud.activepieces.com', 'auth.activepieces.com', 'ywkdmxjwsazhcvocivgw.supabase.co','cdn.llmrails.com'],
  },
  experimental: {
    serverActions: true
  },
  staticPageGenerationTimeout: 300
}

module.exports = nextConfig
