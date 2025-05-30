'use client';

import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
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
    color: 'from-indigo-500/30 via-indigo-500/10 to-transparent',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'SecuriScan – Vuln Scanner',
    copy: '36 h hackathon MVP → real‑time OWASP‑10 dashboard w/ WebSockets.',
    color: 'from-emerald-500/30 via-emerald-500/10 to-transparent',
    Icon: ExclamationTriangleIcon,
  },
  {
    title: 'Realtime DevOps Insights',
    copy: 'Grafana‑style board streams Prometheus metrics over Docker Swarm.',
    color: 'from-amber-500/30 via-amber-500/10 to-transparent',
    Icon: ClipboardDocumentCheckIcon,
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Layer parallax motions
  const yBackground = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), {
    stiffness: 50,
    damping: 20,
  });
  const yShader = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-start overflow-x-hidden overflow-visible px-4 pt-32 pb-16 text-white"
    >
      {/* 🎨 Shader Background */}
      <motion.div
        style={{ y: yShader }}
        className="absolute inset-0 -z-20 pointer-events-none"
      >
        <TanhShaderCanvas />
      </motion.div>

      {/* 🌈 Background Gradient Parallax (no blur) */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 -z-10 bg-gradient-to-br 
                   from-indigo/20 via-surge/30 to-transparent 
                   [mask-image:radial-gradient(ellipse_at_center,white,transparent)] 
                   will-change-transform"
        aria-hidden
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
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.6 }}
            className={`w-72 h-60 rounded-xl p-6 shadow-lg 
                        bg-gradient-to-br ${color} 
                        flex flex-col justify-between 
                        transition hover:scale-105 hover:shadow-xl`}
          >
            <Icon className="h-8 w-8 text-white" />
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/90">{copy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
