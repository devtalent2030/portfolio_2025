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
          bg: 'var(--background)',
          fg: 'var(--foreground)',
          muted: 'var(--muted)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: { color: 'var(--accent-hover)' },
            strong: { color: 'var(--foreground)' },
            h1: { color: 'var(--foreground)' },
            h2: { color: 'var(--foreground)' },
            h3: { color: 'var(--foreground)' },
            h4: { color: 'var(--foreground)' },
            li: { color: 'var(--foreground)' },
            p: { color: 'var(--foreground)' },
          },
        },
        invert: {
          css: {
            color: 'var(--foreground)',
            a: { color: 'var(--accent-hover)' },
            strong: { color: 'var(--foreground)' },
            h1: { color: 'var(--foreground)' },
            h2: { color: 'var(--foreground)' },
            h3: { color: 'var(--foreground)' },
            h4: { color: 'var(--foreground)' },
            li: { color: 'var(--foreground)' },
            p: { color: 'var(--foreground)' },
          },
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
