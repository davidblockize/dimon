/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'dimon-ticker': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '10%': { opacity: '0.7' },
          '20%': { opacity: '0.4' },
          '30%': { opacity: '0.7' },
          '40%': { opacity: '1' },
          '50%': { opacity: '0.4' },
          '60%': { opacity: '0.7' },
          '70%': { opacity: '1' },
          '80%': { opacity: '0.4' },
          '90%': { opacity: '0.7' },
        },
      },
      animation: {
        'dimon-ticker': 'dimon-ticker 18s linear infinite',
        'flicker': 'flicker 0.5s linear 1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        meme: ['Comic Neue', 'Bangers', 'cursive'],
      },
      colors: {
        dimonblue: '#005FF0',
        roguegreen: '#00C48C',
        ragered: '#FF3B30',
      },
    },
  },
  plugins: [],
};
