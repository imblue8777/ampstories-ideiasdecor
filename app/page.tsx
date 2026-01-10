import Link from 'next/link';
import Image from 'next/image';
import { getAllStories } from '@/lib/data';

export default function Home() {
  const stories = getAllStories().reverse();

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900 font-sans flex flex-col">
      <div className="max-w-4xl mx-auto flex-grow">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 tracking-tight">Ideias Decor Stories</h1>
          <p className="text-lg text-gray-600">Inspiração em formato visual para o seu ambiente.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={story.posterPortraitSrc}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md mb-2 inline-block">
                    {story.publisher}
                  </span>
                  <h2 className="text-2xl font-bold leading-tight">{story.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500 pb-8">
        <Link href="/sitemap.xml" className="hover:underline hover:text-gray-700 transition-colors">
          XML Sitemap
        </Link>
      </footer>
    </main>
  );
}
