import { getBlogs } from '@/utils/blogs-helper'
import { GetPieces } from '@/utils/piece-helper'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { MetadataRoute } from 'next'
import { cookies } from 'next/headers'

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
    '/pieces/loops',
    '/pieces/branches',
    '/pieces/webhook',
  ]
  const pieces = await GetPieces()
  pieces.forEach((piece) => {
    simpleRoutes.push(`/pieces/${piece.name.replace('@activepieces/piece-', '')}`)
  })
  const supabase = createServerComponentClient({ cookies })
  const blogs = await getBlogs(supabase)
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

