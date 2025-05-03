'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  repo: string;
  onClick: () => void;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  repo,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        y: -6,
        rotateX: 4,
        rotateY: -4,
        boxShadow: '0 20px 40px rgba(0,0,0,.25)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl
                 border border-white/10 bg-white/5 backdrop-blur
                 dark:bg-black/10 neon-frame"
    >
      {/* Neon Surge glow on hover */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-2xl bg-surge/10 opacity-0
                   blur-xl transition group-hover:opacity-100"
      />

      {/* Thumbnail */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300
                     group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-surge">{title}</h3>
        <p className="mt-2 text-sm text-skin-muted line-clamp-3">
          {description}
        </p>

        {/* Tech chips */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-indigo/10 px-3 py-1 text-xs
                         text-indigo group-hover:bg-indigo/20"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* GitHub Link */}
        <a
          href={repo}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          className="mt-4 inline-block text-sm text-surge underline underline-offset-4 hover:text-indigo"
        >
          View GitHub Repo ↗
        </a>

        <button
          onClick={onClick}
          className="text-sm text-indigo hover:underline"
        >
          Read more →
        </button>
      </div>
    </motion.div>
  );
}
