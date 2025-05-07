'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-black/30">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <img
            src="/logo6x.png"
            alt="Talent Nyota Logo"
            className="h-18 w-auto object-contain"

          />
        </Link>

        <ul className="hidden gap-6 md:flex">
          <li><Link href="#projects" className="hover:text-surge">Projects</Link></li>
          <li><Link href="#about" className="hover:text-surge">About</Link></li>
          <li><Link href="/blog" className="hover:text-surge">Blog</Link></li>
          <li><Link href="#contact" className="hover:text-surge">Contact</Link></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
