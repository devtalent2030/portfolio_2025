import { getAllPosts } from '@/lib/parsePost';
import BlogPreviewClient, { PostCard } from './BlogPreviewClient';

export default async function BlogPreviewServer() {
  const raw = (await getAllPosts()).slice(0, 6);

  const posts: PostCard[] = raw.map((p) => ({
    slug:    p.slug,
    reading: p.reading,
    front:   { title: p.front.title, summary: p.front.summary },
  }));

  return (
    <section id="blog-preview" className="mx-auto max-w-5xl px-4 py-32">
      <h2 className="mb-8 text-3xl font-bold text-surge">Latest Writings</h2>
      <BlogPreviewClient posts={posts} />
    </section>
  );
}
