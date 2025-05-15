'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img
              src="/logo6x.png"
              alt="Talent Nyota Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#projects" className="hover:text-surge">Projects</Link>
          <Link href="#about" className="hover:text-surge">About</Link>
          <Link href="/blog" className="hover:text-surge">Blog</Link>
          <Link href="#contact" className="hover:text-surge">Contact</Link>
        </div>

        {/* Right Side: Toggle + Mobile Menu Button */}
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

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-[80%] max-w-sm bg-black/95 text-white transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/10">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col space-y-6 px-6 py-8">
          <Link href="#projects" onClick={() => setMobileOpen(false)} className="hover:text-surge">Projects</Link>
          <Link href="#about" onClick={() => setMobileOpen(false)} className="hover:text-surge">About</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="hover:text-surge">Blog</Link>
          <Link href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-surge">Contact</Link>
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Optional: Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
