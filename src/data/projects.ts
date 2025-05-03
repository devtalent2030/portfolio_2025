export interface ProjectMeta {
    slug: string;
    title: string;
    blurb: string;
    tech: string[];
    repo: string;
    live?: string;
    img: string;            // path in /public/projects/
  }
  
  export const projects: ProjectMeta[] = [
    {
      slug: 'securiscan',
      title: 'SecuriScan',
      blurb: 'AI‑powered SaaS vulnerability scanner (Top‑10 at IT Expo 24)',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'OpenAI'],
      repo: 'https://github.com/talentnyota/securiscan',
      live: 'https://securiscan.app',
      img : '/projects/securiscan-thumb.png',
    },
    {
      slug: 'shopify-checkout',
      title: 'Shopify Checkout Acceleration',
      blurb: '40% latency reduction for 1 M+ transactions/day',
      tech: ['Go', 'GraphQL', 'Kubernetes', 'AWS'],
      repo: 'https://github.com/talentnyota/checkout-latency',
      img : '/projects/shopify-thumb.gif',
    },
    // add 2‑4 more
  ];
  