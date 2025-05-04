export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    title: string;
    avatar: string;     // 120×120 jpg/png in public/images/avatars/
    link?: string;      // optional LinkedIn URL
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 'shopify',
      quote:
        'Talent delivers high‑impact features with impeccable code quality.\
         Their attention to performance saved our checkout pipeline.',
      name : 'Sarah Thornton',
      title: 'Staff Engineer · Shopify',
      avatar: '/images/avatars/sarah.jpg',
    },
    {
      id: 'mlc',
      quote:
        'Rapidly integrated GPT‑4 into our Unity NPCs —\
         the demo wowed both execs and investors.',
      name : 'Dr. Mei Chen',
      title: 'AI Director · MLC Studio',
      avatar: '/images/avatars/mei.jpg',
    },
    {
      id: 'hackathon',
      quote:
        'Talent led the team to a top‑10 finish, building a full SaaS MVP in 36 h.',
      name : 'Alex Perez',
      title: 'Organizer · IT Expo 24 Hackathon',
      avatar: '/images/avatars/alex.jpg',
    },
  ];
  