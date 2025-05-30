// src/components/sections/BlogPreview.tsx
'use client';

import Link from 'next/link';
import { getAllPosts } from '@/lib/parsePost';

/* Glass wrapper for the whole preview */
const glass =
  'rounded-3xl p-8 backdrop-blur-md ring-1 ring-white/10 shadow-xl ' +
  'bg-[url("/images/card444.png")] bg-cover bg-center bg-white/5';

export default async function BlogPreview() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <section id="blog-preview" className="mx-auto max-w-5xl px-4 py-32">
      <h2 className="mb-8 text-3xl font-bold text-surge">Latest Writings</h2>

      {/* ONE glass card contains the whole grid */}
      <div className={glass}>
        <div className="grid gap-8 sm:grid-cols-3">
          {posts.map((p) => (
            <Link
              href={`/blog/${p.slug}`}
              key={p.slug}
              className="group rounded-lg bg-white/10 p-4 transition hover:bg-white/20"
            >
              <h3 className="mb-1 text-sm font-semibold text-surge">
                {p.front.title}
              </h3>
              <p className="line-clamp-2 text-xs text-white/80">
                {p.front.summary}
              </p>
              <span className="mt-2 inline-block text-[10px] text-indigo">
                {p.reading}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
