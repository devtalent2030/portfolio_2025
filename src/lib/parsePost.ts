import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface FrontMatter {
  title: string;
  summary: string;
  date: string;
  tags?: string[];
  image?: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export async function getPost(slug: string) {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const source = await fs.readFile(mdxPath, 'utf8');

  // gray‑matter typing workaround
  const parsed = matter(source) as unknown as {
    content: string;
    data: FrontMatter;
  };

  return {
    slug,
    mdx: parsed.content,
    front: parsed.data,
    reading: readingTime(parsed.content).text, // e.g. “5 min read”
  };
}

export async function getAllPosts() {
  const files = (await fs.readdir(BLOG_DIR)).filter((f) => f.endsWith('.mdx'));
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      return getPost(slug);
    }),
  );
  // newest first
  return posts.sort((a, b) => (a.front.date < b.front.date ? 1 : -1));
}
