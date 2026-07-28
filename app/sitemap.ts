import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://barimarentals.com/',
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
