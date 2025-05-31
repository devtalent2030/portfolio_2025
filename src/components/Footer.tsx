'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 bg-black/80 text-skin-muted backdrop-blur">
      {/* ── Call-to-Action Strip ────────────────────────── */}
      <div className="border-b border-white/10 bg-gradient-to-r from-surge/20 via-indigo/20 to-transparent p-8 text-center sm:flex sm:items-center sm:justify-between">
        <h3 className="mb-4 text-lg font-semibold tracking-tight text-white sm:mb-0">
          Ready to ship something exceptional?
        </h3>

        {/* 🔥 Animated CTA */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            backgroundColor: [
              'var(--accent)',   // surge green
              '#facc15',         // yellow-400
              '#38bdf8',         // sky-400
              '#f472b6',         // pink-400
              'var(--accent)',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="inline-block rounded-lg shadow-lg"
        >
          <Link
            href="#contact"
            className="block px-6 py-3 text-sm font-bold text-black
                       transition hover:scale-110"
          >
            Let’s Talk ↗
          </Link>
        </motion.div>
      </div>

      {/* ── Link Columns ───────────────────────────────── */}
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3">
        {/* Navigation + Tooling card */}
        <div className="sm:col-span-2">
          <div className="p-8 backdrop-blur-md ring-1 ring-white/10 shadow-xl
                          bg-[url('/images/card911.png')] bg-cover bg-center grid gap-8 sm:grid-cols-2">
            {/* ① Navigation */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/"        className="hover:text-white">Home</Link></li>
                <li><Link href="#projects" className="hover:text-white">Projects</Link></li>
                <li><Link href="/blog"     className="hover:text-white">Blog</Link></li>
                <li><Link href="#contact"  className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* ② Tech Tooling */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Tooling</h4>
              <ul className="space-y-2 text-sm">
                <li>Next.js 14 + App Router</li>
                <li>TypeScript 5 · Tailwind CSS</li>
                <li>Resend & reCAPTCHA v3</li>
                <li>AWS · Docker · Three.js</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ③ Social */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Social</h4>
          <ul className="flex gap-6 text-2xl">
            <li>
              <Link href="https://github.com/devtalent2030" target="_blank" aria-label="GitHub" className="transition hover:text-surge">
                <i className="fa-brands fa-github" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/talentnyota/" target="_blank" aria-label="LinkedIn" className="transition hover:text-surge">
                <i className="fa-brands fa-linkedin" />
              </Link>
            </li>
            <li>
              <Link href="mailto:hello@talent.dev" aria-label="Email" className="transition hover:text-surge">
                <i className="fa-solid fa-envelope" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────────────── */}
      <div className="border-t border-white/10 py-6 text-center text-xs">
        © {year} Talent Nyota · Crafted with 
        <span className="text-surge">Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}
