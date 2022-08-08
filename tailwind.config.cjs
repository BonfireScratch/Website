/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background-blue': '#4d05e8',
        'highlights-red': '#e300d8'
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}
