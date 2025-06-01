'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './NavbarGlow.css';          /* ← NEW */

const linkCard =
  'relative rounded-2xl backdrop-blur-md ring-1 ring-white/10 shadow-lg ' +
  'bg-[url("/images/card1718.png")] bg-cover bg-center bg-white/10 ' +
  'px-6 py-2 flex items-center gap-6 uppercase tracking-wide';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo6x.png"
            alt="Talent Nyota Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* 🖥️ Desktop Links in glowing card */}
        <div className="hidden md:block">
          <div className={`${linkCard} nav-glow`}>
            {['projects', 'about', 'blog', 'contact'].map((slug) => (
              <Link
                key={slug}
                href={slug === 'blog' ? '/blog' : `#${slug}`}
                className="font-bold text-sm transition hover:text-surge"
              >
                {slug}
              </Link>
            ))}
          </div>
        </div>

        {/* Toggle + Mobile button */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* 📱 Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-[80%] max-w-sm transform bg-black/95 text-white transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <span className="text-lg font-semibold">MENU</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col space-y-6 px-6 py-8">
          {['projects', 'about', 'blog', 'contact'].map((slug) => (
            <Link
              key={slug}
              href={slug === 'blog' ? '/blog' : `#${slug}`}
              onClick={() => setMobileOpen(false)}
              className="font-bold uppercase text-lg transition hover:text-surge"
            >
              {slug}
            </Link>
          ))}
          <div className="pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
