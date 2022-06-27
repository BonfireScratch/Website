/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background-blue': '#4d05e8',
        'highlights-red': '#f14336'
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}
