/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        script: ['Pacifico', 'cursive'],
      },
      colors: {
        blush: {
          50: '#fff6fb',
          100: '#ffe8f3',
          200: '#ffcfe5',
          300: '#ffa7cf',
          400: '#ff77b2',
          500: '#f84f98',
        },
        roseGlass: 'rgba(255, 255, 255, 0.48)',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(248, 79, 152, 0.28)',
        button: '0 16px 34px rgba(248, 79, 152, 0.38)',
      },
      animation: {
        shimmer: 'shimmer 4s ease-in-out infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.12)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.08)' },
          '70%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
