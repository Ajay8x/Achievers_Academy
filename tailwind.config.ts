import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: '#f0f5fd',
          100: '#e0ebfb',
          200: '#c7daf8',
          300: '#9fc2f3',
          400: '#70a2eb',
          500: '#4c83e3',
          600: '#3465d6',
          700: '#2b50bf',
          800: '#26429c',
          900: '#0F2B71', // Brand Navy
          950: '#071536', // Deep Midnight Navy
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706', // Brand Warm Gold
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.96' },
        },
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(15, 43, 113, 0.12), 0 0 1px 1px rgba(15, 43, 113, 0.05)',
        'gold-sm': '0 4px 20px -2px rgba(217, 119, 6, 0.25)',
      }
    },
  },
  plugins: [],
};
export default config;
