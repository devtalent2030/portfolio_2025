'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[85vh] flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, scale: 1.3 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo/20 via-surge/30 to-transparent blur-3xl"
      />
      {/* Heading & sub-heading */}
      <h1 className="mb-6 text-center text-5xl font-extrabold tracking-tight lg:text-6xl">
        <span className="text-surge">Talent Nyota</span>
        <br />
        <span className="text-white">Software Engineer</span>
      </h1>
      <p className="mb-10 max-w-xl text-center text-gray-300">
        Building performant&nbsp;full-stack experiences with&nbsp;React, TypeScript & cloud.
      </p>

      {/* CTA */}
      <Link
        href="#projects"
        className="rounded-lg bg-surge px-6 py-3 font-medium text-gold transition hover:scale-105 hover:shadow-lg"
      >
        View My Work ↓
      </Link>
    </section>
  );
}
