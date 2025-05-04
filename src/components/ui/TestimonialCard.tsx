'use client';

import Image from 'next/image';
import { Testimonial } from '@/data/testimonials';

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center text-center">
      <Image
        src={t.avatar}
        alt={t.name}
        width={96}
        height={96}
        className="mb-4 rounded-full object-cover"
      />
      <p className="mb-4 text-lg italic text-skin-muted">&ldquo;{t.quote}&rdquo;</p>
      <span className="font-semibold text-surge">{t.name}</span>
      <span className="text-xs text-skin-muted">{t.title}</span>

      {t.link && (
        <a
          href={t.link}
          target="_blank"
          className="mt-2 text-xs text-indigo underline-offset-4 hover:underline"
        >
          LinkedIn ↗
        </a>
      )}
    </div>
  );
}
