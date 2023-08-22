import { getBlogs } from '@/utils/blogs-helper'
import { GetPieces } from '@/utils/piece-helper'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const simpleRoutes = [
    '/',
    '/features',
    '/google-api-disclosure',
    '/privacy',
    '/find-apps',
    '/terms',
    '/pricing',
    '/pieces-roadmap',
    '/blog',
  ]
  const pieces = await GetPieces()
  pieces.forEach((piece) => {
    simpleRoutes.push(`/pieces/${piece.name.replace('@activepieces/piece-', '')}`)
  })

  const blogs = await getBlogs()
  blogs.forEach((blog) => {
    simpleRoutes.push(`/blog/${blog.slug}`)
  })

  return [
    ...simpleRoutes.map((path) => ({
      url: `https://www.activepieces.com${path}`,
      lastModified: new Date(),
    })),
  ]
}

