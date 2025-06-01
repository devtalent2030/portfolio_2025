// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import LandingLightning from './LandingLightning';
import Rain from './visual/Rain';
import './visual/Rain.css';
import './CloudButton.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-100px' });

  return (
    <footer
      ref={footerRef}
      className="relative mt-32 bg-black/80 text-skin-muted backdrop-blur overflow-hidden"
    >
      {/* ── Call-to-Action Strip ────────────────────────── */}
      <div className="relative z-20 border-b border-white/10 bg-gradient-to-r from-surge/20 via-indigo/20 to-transparent p-8">
        {/* Stack everything vertically and center */}
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
            Ready to ship something exceptional?
            <span className="block text-xs text-white/40 italic font-normal">
              (even when it’s raining and lightning strikes)
            </span>
          </h3>

          {/* ☁️ Cloud */}
          <div className="my-1">
            <div id="cloud">
              <span className="shadow" />
            </div>
          </div>

          {/* 💡 Rain + Lightning “Zone” */}
          {isInView && (
            <div
              className="
                relative w-[180px] h-[130px] mt-2 flex items-center justify-center
              "
            >
              {/* Rain */}
              <Rain />
              {/* Lightning */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <LandingLightning size={950} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Link Columns ───────────────────────────────── */}
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3">
        {/* Navigation + Tooling card */}
        <div className="sm:col-span-2">
          <div
            className="
              p-8 backdrop-blur-md ring-1 ring-white/10 shadow-xl
              bg-[url('/images/card911.png')] bg-cover bg-center
              grid gap-8 sm:grid-cols-2
            "
          >
            {/* ① Navigation */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="font-bold hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="font-bold hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="font-bold hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="font-bold hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* ② Tech Tooling */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Tooling</h4>
              <ul className="space-y-2 text-sm font-bold">
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
          <ul className="flex gap-6 text-2xl">
            <li>
              <Link
                href="https://github.com/devtalent2030"
                target="_blank"
                aria-label="GitHub"
                className="transition hover:text-surge"
              >
                <i className="fa-brands fa-github" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/talentnyota/"
                target="_blank"
                aria-label="LinkedIn"
                className="transition hover:text-surge"
              >
                <i className="fa-brands fa-linkedin" />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:hello@talent.dev"
                aria-label="Email"
                className="transition hover:text-surge"
              >
                <i className="fa-solid fa-envelope" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────────────── */}
      <div className="border-t border-white/10 py-6 text-center text-xs font-bold text-white/90">
        © {year} Talent Nyota · Crafted with{' '}
        <span className="text-surge font-extrabold">Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}
