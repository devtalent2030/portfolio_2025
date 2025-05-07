'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;    // stagger delay
  distance?: number; // slide-up distance
};

export default function Reveal({ children, delay = 0, distance = 40 }: Props) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,            // ✅ allow retriggering on scroll
    threshold: 0.2,                // ✅ triggers when 20% is visible
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  };

  useEffect(() => {
    if (inView) controls.start('show');
    else controls.start('hidden'); // ✅ re-hide when out of view
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}
