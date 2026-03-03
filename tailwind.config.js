/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'poway-blue': '#1e3a8a',
        'poway-blue-light': '#4f6bd9',
      },
    },
  },
  plugins: [],
};
