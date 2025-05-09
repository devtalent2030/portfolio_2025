'use client';

import SkillBadge, { Level } from '@/components/ui/SkillBadge';
import { useSkillFilter, SkillCategory } from '@/state/skillFilter';

type Skill = {
  name: string;
  level: Level;
  category: SkillCategory;
  certified?: boolean;
  note?: string;
};

// 🔥  Sample data – extend freely!
const skills: Skill[] = [
  // Programming
  { name: 'Python', level: 'Expert', category: 'Programming', note: 'AI Resume Screener' },
  { name: 'C#', level: 'Expert', category: 'Programming', note: 'Unity GPT‑4 NPC' },
  { name: 'Java', level: 'Intermediate', category: 'Programming' },
  { name: 'JavaScript', level: 'Expert', category: 'Programming', note: 'Next.js & React' },
  { name: 'COBOL', level: 'Intermediate', category: 'Mainframe', note: 'Mainframe Suite' },

  // Frontend
  { name: 'React', level: 'Expert', category: 'Frontend', note: 'SecuriScan, Dashboard' },
  { name: 'Next.js', level: 'Expert', category: 'Frontend', note: 'AI Screener UI' },
  { name: 'Angular', level: 'Familiar', category: 'Frontend' },

  // Cloud & DevOps
  { name: 'AWS', level: 'Intermediate', category: 'Cloud', certified: true },
  { name: 'Docker', level: 'Expert', category: 'DevOps', note: 'DevOps Dashboard' },
  { name: 'Kubernetes', level: 'Intermediate', category: 'DevOps', note: 'Shopify project' },
  { name: 'GitHub Actions', level: 'Expert', category: 'DevOps' },

  // Database
  { name: 'PostgreSQL', level: 'Expert', category: 'Database', note: 'SecuriScan' },
  { name: 'MongoDB', level: 'Intermediate', category: 'Database' },

  // Mobile
  { name: 'Flutter', level: 'Intermediate', category: 'Mobile', note: 'Wellness App' },

  // Soft skills
  { name: 'Agile / Scrum', level: 'Expert', category: 'Soft' },
  { name: 'Mentorship', level: 'Expert', category: 'Soft' },
];

const categories: SkillCategory[] = [
  'All',
  'Programming',
  'Frontend',
  'Backend',
  'Cloud',
  'Database',
  'DevOps',
  'Mainframe',
  'Mobile',
  'Soft',
];

export default function Skills() {
  const { active, setActive } = useSkillFilter();

  const filtered = active === 'All'
    ? skills
    : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-32">
      <h2 className="mb-12 text-3xl font-bold text-surge">Skills Matrix</h2>

      {/* Filter Bar */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1 text-xs font-medium transition
                         ${active === cat ? 'bg-surge text-black' : 'bg-skin-muted/10 text-skin-muted hover:bg-skin-muted/20'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            level={skill.level}
            certified={skill.certified}
            note={skill.note}
          />
        ))}
      </div>
    </section>
  );
}
