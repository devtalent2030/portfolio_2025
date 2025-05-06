'use client';

import '@/styles/prism-theme.css';   // ⬅️ scoped Prism styles
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function CodeBlock({
  children,
  language,
}: {
  children: ReactNode;
  language?: string;
}) {
  return (
    <pre
      className={twMerge(
        'rounded-lg border border-white/10 p-4 text-sm overflow-x-auto',
        language && `language-${language}`,
      )}
    >
      <code>{children}</code>
    </pre>
  );
}
