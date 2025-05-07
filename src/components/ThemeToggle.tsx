// src/components/ThemeToggle.tsx
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  /* ————————————————————————— theme control ————————————————————————— */
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /* ————————————————————————— pull cord animation ————————————————————— */
  const controls = useAnimation();

  /** yank + bounce cord, then flip theme */
  async function handleToggle() {
    // cord + bulb pull‑down
    await controls.start({
      y: 12,
      transition: { type: 'spring', stiffness: 500, damping: 20 },
    });
    await controls.start({
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 12 },
    });

    // flip between dark / light
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  if (!mounted) return null;

  /* ————————————————————————— SVG Bulb ——————————————————————————————— */
  const isLight = theme === 'light';

  return (
    <div className="relative group">
      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-90 rounded bg-white/90 px-2 py-1 text-xs text-black opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1">
        Pull to toggle theme
      </div>
  
      {/* Bulb Button */}
      <motion.button
        aria-label="Toggle theme"
        onClick={handleToggle}
        className="relative h-14 w-14 select-none outline-none"
        whileTap={{ scale: 0.95 }}
      >
        {/* Cord */}
        <motion.div
          animate={controls}
          className="absolute left-1/2 top-0 -translate-x-1/2"
        >
          <div className="h-10 w-[2px] bg-white/70 dark:bg-white/40" />
          <div className="mx-auto h-2 w-2 rounded-full bg-white/90 dark:bg-white/50" />
        </motion.div>
  
        {/* Bulb */}
        <motion.svg
          className="absolute bottom-0 left-1/2 h-12 w-12 -translate-x-1/2"
          viewBox="0 0 50 50"
          initial={false}
          animate={{
            filter: isLight
              ? 'drop-shadow(0 0 6px rgba(255,230,120,0.85))'
              : 'drop-shadow(0 0 2px rgba(0,0,0,0))',
            transition: { duration: 0.3 },
          }}
        >
          <circle
            cx="25"
            cy="25"
            r="14"
            fill={isLight ? '#FFF9C4' : '#1F2937'}
            stroke="#BBBBBB"
            strokeWidth="2"
          />
          <path
            d="M20 23 Q25 28 30 23"
            fill="none"
            stroke={isLight ? '#FBBF24' : '#4B5563'}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.button>
    </div>
  );
  
}
