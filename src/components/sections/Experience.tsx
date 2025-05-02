'use client';

import { useState } from 'react';
import Image from 'next/image';
import { experience } from '@/data/experience';

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-32">
      <h2 className="mb-12 text-3xl font-bold text-surge">Experience</h2>

      <ol className="relative border-l border-surge/40 pl-6">
        {experience.map((item) => (
          <li key={item.id} className="mb-12">
            {/* timeline dot */}
            <span className="absolute -left-[7px] h-3 w-3 rounded-full bg-surge" />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                width={40}
                height={40}
                className="rounded"
              />

              <div>
                <div className="font-semibold text-white">
                  {item.title} • {item.company}
                </div>
                <div className="text-sm text-gray-400">
                  {item.start} – {item.end} • {item.location}
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-gray-300">
              {item.bullets.slice(0, openId === item.id ? undefined : 2).map((b) => (
                <li key={b}>– {b}</li>
              ))}
            </ul>

            {/* Read‑more toggle */}
            {item.bullets.length > 2 && (
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="mt-2 text-sm font-medium text-surge hover:underline"
              >
                {openId === item.id ? 'Show less' : 'Read more'}
              </button>
            )}

            {/* Optional endorsement */}
            {item.quote && openId === item.id && (
              <blockquote className="mt-4 border-l-4 border-surge/60 pl-4 italic text-gray-400">
                “{item.quote.text}” – {item.quote.author}, {item.quote.role}
              </blockquote>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
