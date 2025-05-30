'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

/* 🌟 Glass container using your texture */
const glass =
  'rounded-3xl p-8 backdrop-blur-md ring-1 ring-white/10 shadow-xl ' +
  'bg-[url("/images/card444.png")] bg-cover bg-center bg-white/5';

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-4xl px-4 py-32">
      <h2 className="mb-12 text-3xl font-bold text-surge">Testimonials</h2>

      {/* 👇 All testimonial content now inside glass card */}
      <div className={glass}>
        <Swiper
          className="testimonial-swiper"
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="flex justify-center">
                <TestimonialCard t={t} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
