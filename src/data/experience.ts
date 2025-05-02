// All dates ISO‐8601 so they can be parsed anywhere
export interface ExperienceItem {
    id: string;
    company: string;
    title: string;
    start: string;  // '2024-05'
    end: string | 'Present';
    location: string;
    logo: string;   // /images/logos/shopify.svg
    bullets: string[];
    tech: string[];
    quote?: { text: string; author: string; role: string };
  }
  
  export const experience: ExperienceItem[] = [
    {
      id: 'shopify-swe',
      company: 'Shopify',
      title: 'Software Engineer II',
      start: '2024-08',
      end: 'Present',
      location: 'Toronto • Hybrid',
      logo: '/images/logos/shop.svg',
      bullets: [
        'Reduced checkout latency **40 %** by refactoring GraphQL layer in Go.',
        'Migrated 5+ services to **Kubernetes** with GitHub Actions CI/CD.',
        'Mentored two interns; both received return offers.',
      ],
      tech: ['React', 'Next.js', 'Go', 'Kubernetes', 'AWS', 'GitHub Actions'],
      quote: {
        text: 'Talent delivers high‑impact features with impeccable code quality.',
        author: 'Sarah Thorton',
        role: 'Staff Engineer, Shopify',
      },
    },
    {
      id: 'mlc-unity',
      company: 'MLC Studio',
      title: 'AI Developer (Co‑op)',
      start: '2025-01',
      end: '2025-04',
      location: 'Toronto',
      logo: '/images/logos/mrcstudio.svg',
      bullets: [
        'Integrated GPT‑4 agents into Unity game‑engine NPCs.',
        'Achieved **92 %** intent‑classification accuracy with custom fine‑tune.',
      ],
      tech: ['Unity', 'C#', 'Python', 'OpenAI API'],
    },
    {
      id: 'securiscan',
      company: 'SecuriScan (Hackathon)',
      title: 'Full‑Stack Lead',
      start: '2024-09',
      end: '2024-09',
      location: 'IT Expo 24 Hackathon',
      logo: '/images/logos/securiscan.svg',
      bullets: [
        'Built vulnerability‑scanner SaaS MVP in **36 h**; Top‑10 finish.',
        'Implemented real‑time WebSocket dashboard with **Next.js 14 App Router**.',
      ],
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets'],
    },
  ];
  