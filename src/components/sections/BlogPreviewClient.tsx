'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
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

export default function BlogPreviewClient({ posts }: { posts: PostCard[] }) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  if (isMobile === null) return null;

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        autoplay={
          !isMobile
            ? {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        navigation={{
          nextEl: '.blog-next-btn',
          prevEl: '.blog-prev-btn',
        }}
        loop
        initialSlide={0}
        allowTouchMove={false} // ✅ disables swiping on all devices
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
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

      {/* 🔼 Navigation Arrows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button className="blog-prev-btn text-white text-3xl font-bold px-4 py-2 bg-black/50 rounded-full shadow-md hover:bg-white/20 transition">
          ←
        </button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button className="blog-next-btn text-white text-3xl font-bold px-4 py-2 bg-black/50 rounded-full shadow-md hover:bg-white/20 transition">
          →
        </button>
      </div>
    </div>
  );
}
