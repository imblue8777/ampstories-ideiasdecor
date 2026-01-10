import { MetadataRoute } from 'next';
import { getAllStories } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const stories = getAllStories();
    const baseUrl = 'https://stories.ideiasdecor.com';

    const storyUrls = stories.map((story) => ({
        url: `${baseUrl}/stories/${story.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...storyUrls,
    ];
}
