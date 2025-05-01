import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surge: '#00FFA3',     // Surge Green
        indigo: '#6366F1',    // Indigo accent
      },
    },
  },
  plugins: [],
};

export default config;
