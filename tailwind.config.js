/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'olive': {
          50: '#f8f9f5',
          100: '#EBF5D0',
          200: '#e3e7d7',
          300: '#d5dbc3',
          400: '#c7cfaf',
          500: '#b9c39b',
          600: '#8b9c74',
          700: '#5d754d',
          800: '#2f4e26',
          900: '#012700',
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 