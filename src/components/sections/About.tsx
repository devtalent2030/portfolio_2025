'use client';

import Image from 'next/image';
import Link from 'next/link';
import AboutContent from './AboutContent';
import CareerTimeline from '../CareerTimeline';

const cardClasses =
  'rounded-3xl backdrop-blur-md shadow-xl ' + // glass-morphism
  'bg-[url("/images/card444.png")] bg-cover bg-center ' + // texture
  'bg-white/5 ring-1 ring-white/10'; // subtle glass ring

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-32 md:flex-row"
    >
      {/* ─────────────── CARD 1 ─────────────── */}
      <div
        className={`${cardClasses} flex w-full max-w-md flex-col items-center p-8`}
      >
        {/* Head-shot */}
        <div className="relative h-48 w-48 overflow-hidden rounded-2xl">
          <Image
            src="/images/headshot-silhouette.png" // replace with real photo
            alt="Professional headshot of Talent Nyota"
            fill
            sizes="192px"
            className="object-cover"
            priority
            // placeholder="blur"  // uncomment if you add blurDataURL
          />
        </div>

        {/* Resume button */}
        <Link
          href="/Talent_Nyota_Resume.pdf"
          target="_blank"
          className="mt-6 inline-block rounded-lg bg-surge px-5 py-2 font-medium text-black transition hover:scale-105 hover:bg-indigo"
        >
          Download Resume ↗
        </Link>

        {/* Quick facts */}
        <ul className="mt-6 space-y-2 text-sm text-white/80">
          <li>📍 Based in Toronto, Canada</li>
          <li>💻 3+ years coding experience</li>
          <li>🗣️ Fluent in English & French</li>
          <li>☁️ AWS Certified Developer</li>
        </ul>
      </div>

      {/* ─────────────── CARD 2 ─────────────── */}
      <div className={`${cardClasses} flex-1 p-8`}>
        {/* Intro */}
        <div className="prose prose-invert max-w-none text-white/90">
          <AboutContent />
        </div>

        {/* Timeline */}
        <h2 className="mt-10 mb-4 text-2xl font-bold text-surge">
          Career Highlights
        </h2>
        <CareerTimeline
          accentColor="purple"
          items={[
            {
              year: 2025,
              title: 'Graduated – Advanced Diploma in Computer Programming',
            },
            { year: 2025, title: 'MLC Studio Placement – AI in Unity' },
            {
              year: 2024,
              title: 'Built SecuriScan for IT Expo (Top-10 project)',
            },
          ]}
        />
      </div>
    </section>
  );
}
