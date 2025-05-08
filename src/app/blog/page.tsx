// app/blog/page.tsx
import { getAllPosts } from '@/lib/parsePost';
import BlogIndexClient from './BlogIndexClient';

export const metadata = { title: 'Blog – Talent Nyota' };

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogIndexClient posts={posts} />;
}
