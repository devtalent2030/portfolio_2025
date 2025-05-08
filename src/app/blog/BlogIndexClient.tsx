'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

export default function BlogIndexClient({ posts }: { posts: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const postsPerPage = 2;

  const filtered = useMemo(() => {
    return posts.filter((p) =>
      p.front.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, posts]);

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const currentPosts = filtered.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-32 text-white">
      <h2 className="mb-12 text-3xl font-bold text-surge">Writings</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search articles..."
        className="mb-6 w-full rounded border border-white/10 bg-black/20 p-2"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* 📋 List all titles */}
      <div className="mb-6 text-sm text-gray-400">
        <strong>All Articles:</strong>
        <ul className="list-disc ml-6 mt-1">
          {posts.map((p) => (
            <li key={p.slug}>{p.front.title}</li>
          ))}
        </ul>
      </div>

      {/* 📰 Articles Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {currentPosts.map((p) => (
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
                className="mb-4 h-40 w-full rounded-lg object-cover transition group-hover:scale-105"
              />
            )}
            <h3 className="mb-2 text-lg font-bold text-surge">{p.front.title}</h3>
            <p className="text-sm text-skin-muted">{p.front.summary}</p>
            <span className="mt-2 inline-block text-xs text-indigo">{p.reading}</span>
          </Link>
        ))}
      </div>

      {/* ⏮ Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-between text-sm text-gray-400">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="rounded px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-30"
          >
            Previous
          </button>

          <span>Page {currentPage} of {totalPages}</span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="rounded px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-30"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
