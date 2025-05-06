// src/components/sections/BlogPreview.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/parsePost';

export default async function BlogPreview() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <section id="blog-preview" className="mx-auto max-w-5xl px-4 py-32">
      <h2 className="mb-8 text-3xl font-bold text-surge">Latest Writings</h2>

      <div className="grid gap-8 sm:grid-cols-3">
        {posts.map((p) => (
          <Link
            href={`/blog/${p.slug}`}
            key={p.slug}
            className="group rounded-xl border border-white/10 bg-white/5 p-4
                       transition hover:shadow-lg backdrop-blur dark:bg-black/10"
          >
            <h3 className="mb-1 text-sm font-semibold text-surge">
              {p.front.title}
            </h3>
            <p className="line-clamp-2 text-xs text-skin-muted">
              {p.front.summary}
            </p>
            <span className="mt-2 inline-block text-[10px] text-indigo">
              {p.reading}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
