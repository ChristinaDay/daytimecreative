import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        text: {
          light: '#1a365d',
          dark: '#f8fafc',
        },
        accent: {
          light: '#3b82f6',
          dark: '#aee7ff',
        },
        surface: {
          light: '#f1f5f9',
          dark: '#1e293b',
        },
        opal: {
          light: {
            base: '#ffffff',
            pink: '#ffd1dc',
            blue: '#d4f1f9',
            purple: '#e6e6fa',
            green: '#e0f7fa',
          },
          dark: {
            base: '#0f172a',
            pink: '#4a1e3a',
            blue: '#1a365d',
            purple: '#2d1b3b',
            green: '#1a3a3a',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-prata)', 'serif'],
        mono: ['var(--font-geist-mono)'],
      },
      lineHeight: {
        hero: '1.25',
        heading: '1.25',
        quote: '1.25',
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.25' }],
        '6xl': ['3.75rem', { lineHeight: '1.25' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '3xl': ['1.875rem', { lineHeight: '1.25' }],
        '2xl': ['1.5rem', { lineHeight: '1.25' }],
        'xl': ['1.25rem', { lineHeight: '1.25' }],
        'lg': ['1.125rem', { lineHeight: '1.25' }],
      },
    },
  },
  plugins: [
    function({ addComponents }: { addComponents: Function }) {
      addComponents({
        '.detail-tags': {
          '@apply pt-4': {},
        },
      });
    },
  ],
}

export default config; 