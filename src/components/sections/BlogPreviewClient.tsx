// src/components/sections/BlogPreviewClient.tsx
'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay }          from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import Link                  from 'next/link';
import { FrontMatter }       from '@/lib/parsePost';

import 'swiper/css';

export interface PostCard {
  slug: string;
  reading: string;
  front: Pick<FrontMatter, 'title' | 'summary'>;
}

export default function BlogPreviewClient({ posts }: { posts: PostCard[] }) {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Swiper
      modules={[Autoplay]}
      onSwiper={(s) => (swiperRef.current = s)}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter   : true,
      }}
      loop
      spaceBetween={24}
      slidesPerView={1}           // mobile = 1
      breakpoints={{
        768 : { slidesPerView: 1.5 }, // tablet
        1024: { slidesPerView: 2   }, // desktop  ➜ now < total slides
      }}
      className="!overflow-visible"
    >
      {posts.map((p) => (
        <SwiperSlide key={p.slug} className="pb-2">
          <Link
            href={`/blog/${p.slug}`}
            className="group block h-full rounded-xl border border-white/10
                       bg-white/5 p-4 transition hover:shadow-lg backdrop-blur
                       dark:bg-black/10"
          >
            <h3 className="mb-1 text-sm font-semibold text-surge group-hover:underline">
              {p.front.title}
            </h3>
            <p className="line-clamp-2 text-xs text-skin-muted">
              {p.front.summary}
            </p>
            <span className="mt-2 inline-block text-[10px] text-indigo">
              {p.reading}
            </span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
