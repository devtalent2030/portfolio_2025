// src/components/visual/Rain.tsx
'use client';

import React, { useMemo } from 'react';
import './Rain.css';

/**
 * Rain.tsx
 *
 * Renders N “raindrop” <div>s, each absolutely positioned
 * inside a parent container. Each drop has inline styles
 * to randomize its horizontal position, animation delay,
 * animation duration, and opacity. The CSS keyframe
 * “rain-fall” drives the vertical motion.
 */

const NUM_DROPS = 100; // you can bump to 150 if you want heavier rain

export default function Rain() {
  const drops = useMemo(() => {
    return Array.from({ length: NUM_DROPS }).map((_, i) => {
      // Randomize left (0%–100%)
      const left = Math.random() * 100;
      // Randomize starting opacity (0.3–0.6)
      const opacity = 0.3 + Math.random() * 0.3;
      // Randomize animation duration (2s–6s)
      const duration = 2 + Math.random() * 4;
      // Randomize animation delay (0s–4s)
      const delay = Math.random() * 4;

      return { key: i, left, opacity, duration, delay };
    });
  }, []);

  return (
    <>
      {drops.map(({ key, left, opacity, duration, delay }) => (
        <div
          key={key}
          className="rain"
          style={{
            left: `${left}%`,
            opacity,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </>
  );
}
