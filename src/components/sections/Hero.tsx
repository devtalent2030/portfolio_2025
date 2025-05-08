'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { FC, SVGProps } from 'react';
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

const TanhShaderCanvas = dynamic(() => import('../visual/TanhShader'), {
  ssr: false,
});

type Card = {
  title: string;
  copy: string;
  color: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

const cards: Card[] = [
  {
    title: 'AI‑Driven Resume Screening',
    copy: 'LLM pipeline (LangChain + Pinecone) ranks 1k CVs in < 2 s.',
    color: 'from-indigo-500/40 via-indigo-500/20',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'SecuriScan – Vuln Scanner',
    copy: '36 h hackathon MVP → real‑time OWASP‑10 dashboard w/ WebSockets.',
    color: 'from-emerald-500/40 via-emerald-500/20',
    Icon: ExclamationTriangleIcon,
  },
  {
    title: 'Realtime DevOps Insights',
    copy: 'Grafana‑style board streams Prometheus metrics over Docker Swarm.',
    color: 'from-amber-500/40 via-amber-500/20',
    Icon: ClipboardDocumentCheckIcon,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto px-4 pt-32 pb-16 text-white"
    >
      {/* 🎨 Scoped Shader Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-20 pointer-events-none">
        <TanhShaderCanvas />
      </div>

      {/* 🌀 Motion Blur Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, scale: 1.3 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo/20 via-surge/30 to-transparent blur-3xl"
      />

      {/* 👤 Name + Title */}
      <h1 className="mb-6 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        <span className="text-surge">Talent Nyota</span>
      </h1>

      {/* 📄 Subtitle */}
      <p className="mb-10 max-w-xl text-center text-skin-fg text-base font-light sm:text-lg">
        Building performant&nbsp;full-stack experiences with&nbsp;React, TypeScript & cloud.
      </p>

      {/* 🚀 Call To Action */}
      <Link
        href="#projects"
        className="rounded-lg bg-surge px-6 py-3 font-medium text-black transition hover:scale-105 hover:bg-indigo"
      >
        View My Work ↓
      </Link>

      {/* 🧱 Cards */}
      <div className="mt-16 flex flex-wrap justify-center gap-6">
        {cards.map(({ title, copy, Icon, color }, i) => (
          <div
            key={i}
            className={`w-72 h-60 rounded-xl p-6 backdrop-blur-lg shadow-lg bg-gradient-to-br ${color} flex flex-col justify-between transition hover:scale-105 hover:shadow-xl`}
          >
            <Icon className="h-8 w-8 text-white" />
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/90">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
