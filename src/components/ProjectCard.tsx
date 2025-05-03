'use client';

import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  onClick: () => void;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-lg border border-gray-700 bg-skin-bg p-4 transition hover:shadow-lg hover:ring-1 hover:ring-surge"
    >
      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="mb-2 text-xl font-bold text-surge">{title}</h3>
      <p className="mb-3 text-sm text-skin-muted">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-indigo">
        {tech.map((t) => (
          <span key={t} className="rounded bg-indigo/10 px-2 py-1 font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
