'use client';

import { useState } from 'react';
import Image from 'next/image';
import { experience } from '@/data/experience';

/* Glass-card utility */
const card =
  'rounded-3xl p-6 backdrop-blur-md ring-1 ring-white/10 shadow-xl ' +
  'bg-[url("/images/card444.png")] bg-cover bg-center bg-white/5';

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-32">
      <h2 className="mb-12 text-3xl font-bold text-surge">Experience</h2>

      <ol className="flex flex-col gap-8">
        {experience.map((item) => (
          <li key={item.id} className={card}>
            {/* Row: logo + title */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                width={48}
                height={48}
                className="rounded"
                priority
              />

              <div>
                <div className="font-semibold text-skin-fg">
                  {item.title} • {item.company}
                </div>
                <div className="text-sm text-skin-muted">
                  {item.start} – {item.end} • {item.location}
                </div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="mt-4 space-y-2 text-skin-fg">
              {item.bullets
                .slice(0, openId === item.id ? undefined : 2)
                .map((b) => (
                  <li key={b}>– {b}</li>
                ))}
            </ul>

            {/* Read more / less */}
            {item.bullets.length > 2 && (
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="mt-3 text-sm font-medium text-surge hover:text-indigo hover:underline"
              >
                {openId === item.id ? 'Show less' : 'Read more'}
              </button>
            )}

            {/* Optional quote */}
            {item.quote && openId === item.id && (
              <blockquote className="mt-4 border-l-4 border-surge/60 pl-4 italic text-skin-muted">
                “{item.quote.text}” – {item.quote.author}, {item.quote.role}
              </blockquote>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
