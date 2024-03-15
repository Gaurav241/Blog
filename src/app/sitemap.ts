import { MetadataRoute } from 'next';

import { getAllPostsFromNotion } from '@/services/posts';

export default async function sitemap() {
  const allPosts = await getAllPostsFromNotion();
  const sitemap: MetadataRoute.Sitemap = [];

  for (const post of allPosts) {
    sitemap.push({
      url: `${process.env.SITE_URL}/${post.slug}`,
      lastModified: new Date(post.lastEditedAt),
    });
  }

  return sitemap;
}
