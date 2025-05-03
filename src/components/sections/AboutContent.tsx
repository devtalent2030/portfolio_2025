'use client';
import AboutMDX from '../../../content/about.mdx';

export default function AboutContent() {
  return (
    <article className="prose prose-surge prose-h2:text-surge prose-a:text-indigo
                        dark:prose-invert">
      <AboutMDX />
    </article>
  );
}
