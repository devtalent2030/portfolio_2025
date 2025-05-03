import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surge : 'var(--accent)',
        indigo: 'var(--accent-hover)',
        skin: {
          bg : 'var(--background)',
          fg : 'var(--foreground)',
          muted: 'var(--muted)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addBase }) {
      addBase({
        body: {
          background: 'var(--background)',
          color: 'var(--foreground)',
        },
      });
    }),
  ],
};

export default config;
