import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost, getAllPosts } from '@/lib/parsePost';
import CodeBlock from '@/components/ui/CodeBlock';
import Image from 'next/image';

// -------------------------------------------------------------
// 1. Static params (SSG)
// -------------------------------------------------------------
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
}

// -------------------------------------------------------------
// 2. Blog post page
// -------------------------------------------------------------
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  /* 👇  Await params FIRST (Next 15 warning goes away) */
  const { slug } = await Promise.resolve(params);

  const post = await getPost(slug);

  /* Format the date so React sees a string, not a Date object   */
  const published = new Date(post.front.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <article className="prose prose-invert mx-auto max-w-3xl px-4 py-24">
      {post.front.image && (
        <Image
          src={post.front.image}
          alt=""
          width={1280}
          height={640}
          className="mb-8 rounded-lg"
        />
      )}

      <h1>{post.front.title}</h1>
      <p className="text-sm text-skin-muted">
        {published} · {post.reading}
      </p>

      {/* MDX with custom components */}
      <MDXRemote source={post.mdx} components={{ CodeBlock }} />
    </article>
  );
}
