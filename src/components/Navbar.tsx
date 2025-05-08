'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can use Heroicons or Lucide

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo6x.png"
            alt="Talent Nyota Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center gap-6">
          <li><Link href="#projects" className="hover:text-surge">Projects</Link></li>
          <li><Link href="#about" className="hover:text-surge">About</Link></li>
          <li><Link href="/blog" className="hover:text-surge">Blog</Link></li>
          <li><Link href="#contact" className="hover:text-surge">Contact</Link></li>
        </ul>

        {/* THEME TOGGLE */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 px-4 pb-6 pt-2 text-white space-y-4">
          <Link href="#projects" onClick={() => setMobileOpen(false)} className="block hover:text-surge">Projects</Link>
          <Link href="#about" onClick={() => setMobileOpen(false)} className="block hover:text-surge">About</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="block hover:text-surge">Blog</Link>
          <Link href="#contact" onClick={() => setMobileOpen(false)} className="block hover:text-surge">Contact</Link>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
