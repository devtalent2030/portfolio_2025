import Link from 'next/link';
import { getAllPosts } from '@/lib/parsePost';

export const metadata = { title: 'Blog – Talent Nyota' };

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-4 py-32">
      <h2 className="mb-12 text-3xl font-bold text-surge">Writings</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p: any) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-xl border border-white/10 bg-white/5
                       p-6 transition hover:shadow-lg backdrop-blur
                       dark:bg-black/10"
          >
            {p.front.image && (
              <img
                src={p.front.image}
                alt=""
                className="mb-4 h-40 w-full rounded-lg object-cover
                           transition group-hover:scale-105"
              />
            )}
            <h3 className="mb-2 text-lg font-bold text-surge">{p.front.title}</h3>
            <p className="text-sm text-skin-muted">{p.front.summary}</p>
            <span className="mt-2 inline-block text-xs text-indigo">{p.reading}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
