import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'adizen-black': '#000000',
        'adizen-white': '#ffffff',
        'adizen-light-grey': '#e2e2e2',
        'adizen-primary-blue': '#21279d',
        'adizen-border-grey': '#d7d7d7',
        'adizen-skill-bg': '#f1f1f1',
        'adizen-journey-icon-bg': '#f2f2f2',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        'source-serif-4': ['var(--font-source-serif-4)', 'serif'],
        dotgothic16: ['var(--font-dotgothic16)', 'sans-serif'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
        'archivo-narrow': ['var(--font-archivo-narrow)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'], // Added for theme consistency if needed
      },
      maxWidth: {
        '1344': '1344px',
      },
      spacing: {
        '124': '124px',
        '200': '200px',
        '248': '248px',
      },
    },
  },
  plugins: [],
};
export default config;