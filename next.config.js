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
        source: '/docs',
        destination: '/docs/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/plans',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/report-issue',
        destination: 'https://community.activepieces.com/c/need-help/5',
        permanent: true
      },
      {
        source: '/roadmap',
        destination: 'https://github.com/orgs/activepieces/projects/53',
        permanent: true
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
    domains: ['cdn.activepieces.com', 'cloud.activepieces.com', 'auth.activepieces.com', 'ywkdmxjwsazhcvocivgw.supabase.co', 'powerwa.it'],
  },
  experimental: {
    serverActions: true
  },
  staticPageGenerationTimeout: 300
}

module.exports = nextConfig
