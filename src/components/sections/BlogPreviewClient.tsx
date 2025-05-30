'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';            // ⬅️ Autoplay removed
import type { Swiper as SwiperClass } from 'swiper';
import Link from 'next/link';
import { FrontMatter } from '@/lib/parsePost';

import 'swiper/css';
import 'swiper/css/navigation';

export interface PostCard {
  slug: string;
  reading: string;
  front: Pick<FrontMatter, 'title' | 'summary'>;
}

const glass =
  'rounded-3xl p-8 backdrop-blur-md ring-1 ring-white/10 shadow-xl ' +
  'bg-[url("/images/card444.png")] bg-cover bg-center bg-white/5 ' +
  'overflow-hidden';                                      // ⬅️ prevents sideways scroll

export default function BlogPreviewClient({ posts }: { posts: PostCard[] }) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile === null) return null;

  return (
    <div className={glass}>
      <div className="relative">
        <Swiper
          modules={[Navigation]}                         /* ⬅️ Autoplay removed */
          onSwiper={(s) => (swiperRef.current = s)}
          navigation={{
            nextEl: '.blog-next-btn',
            prevEl: '.blog-prev-btn',
          }}
          loop={false}                                   /* ⬅️ looping disabled */
          allowTouchMove={false}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 1024: { slidesPerView: 2 }}}    /* ⬅️ 1 → 2 on desktop */
          className="!overflow-visible"
        >
          {posts.map((p) => (
            <SwiperSlide key={p.slug} className="pb-2">
              <Link
                href={`/blog/${p.slug}`}
                className="group block h-full rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
              >
                <h3 className="mb-1 text-sm font-semibold text-surge group-hover:underline">
                  {p.front.title}
                </h3>
                <p className="line-clamp-2 text-xs text-white/80">
                  {p.front.summary}
                </p>
                <span className="mt-2 inline-block text-[10px] text-indigo">
                  {p.reading}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="blog-prev-btn absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-3xl font-bold text-white shadow-md transition hover:bg-white/20">
          ←
        </button>
        <button className="blog-next-btn absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-3xl font-bold text-white shadow-md transition hover:bg-white/20">
          →
        </button>
      </div>
    </div>
  );
}
