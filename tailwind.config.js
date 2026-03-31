/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        beige: '#F0E6D6',
        sand: '#D4C5A9',
        charcoal: '#2C2C2C',
        'warm-gray': '#6B6259',
        terracotta: {
          DEFAULT: '#C67D4B',
          dark: '#A8603A',
        },
        gold: '#B8963E',
        sage: '#7D8C6E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
