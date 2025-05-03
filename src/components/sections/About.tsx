import Image from 'next/image';
import Link from 'next/link';
import AboutContent from './AboutContent';
import CareerTimeline from '../CareerTimeline';

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 py-32 md:flex md:items-start"
    >
      {/* -------------------------------------------------- */}
      {/* LEFT COLUMN: PHOTO + QUICK FACTS                   */}
      {/* -------------------------------------------------- */}
      <div className="mx-auto mb-12 flex max-w-xs flex-col items-center md:mx-0 md:mr-12 md:mb-0">
        {/* Professional head‑shot (replace placeholder) */}
        <div className="relative h-48 w-48 overflow-hidden rounded-2xl">
          <Image
            src="/images/headshot-silhouette.png"
            alt="Professional headshot of Talent Nyota"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Download‑resume button */}
        <Link
          href="/Talent_Nyota_Resume.pdf"
          target="_blank"
          className="mt-6 inline-block rounded-lg bg-surge px-5 py-2 font-medium text-white transition hover:scale-105 hover:shadow-lg"
        >
          Download Resume ↗
        </Link>

        {/* Quick facts list */}
        <ul className="mt-6 space-y-2 text-sm text-skin-muted">
          <li>📍 Based in Toronto, Canada</li>
          <li>💻 3+ years coding experience</li>
          <li>🗣️ Fluent in English & French</li>
          <li>☁️ AWS Certified Developer</li>
        </ul>
      </div>

      {/* -------------------------------------------------- */}
      {/* RIGHT COLUMN: INTRO + TIMELINE                    */}
      {/* -------------------------------------------------- */}
      <div className="flex-1">
        {/* Concise professional introduction from MDX */}
        <div className="prose prose-invert max-w-none text-skin-muted">
          <AboutContent />
        </div>

        {/* Timeline heading */}
        <h2 className="mt-12 mb-4 text-2xl font-bold text-surge">Career Highlights</h2>

        {/* Timeline component */}
        <CareerTimeline
          accentColor="purple"
          items={[
            { year: 2025, title: 'Graduated – Advanced Diploma in Computer Programming' },
            { year: 2025, title: 'MLC Studio Placement – AI in Unity' },
            { year: 2024, title: 'Built SecuriScan for IT Expo (Top‑10 project)' },
          ]}
        />
      </div>
    </section>
  );
}
