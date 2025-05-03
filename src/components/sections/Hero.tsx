'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[85vh] flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Surge + Indigo background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, scale: 1.3 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo/20 via-surge/30 to-transparent blur-3xl"
      />

      {/* Name + title */}
      <h1 className="mb-6 text-center text-5xl font-extrabold tracking-tight lg:text-6xl">
        <span className="text-surge">Talent Nyota</span>
        <br />
        <span className="text-skin-fg">Software Engineer</span>
      </h1>

      {/* Subtitle */}
      <p className="mb-10 max-w-xl text-center text-skin-fg text-lg font-light">
        Building performant&nbsp;full-stack experiences with&nbsp;React, TypeScript & cloud.
      </p>

      {/* Call-to-action button */}
      <Link
        href="#projects"
        className="rounded-lg bg-surge px-6 py-3 font-medium text-black transition hover:scale-105 hover:bg-indigo"
      >
        View My Work ↓
      </Link>
    </section>
  );
}
