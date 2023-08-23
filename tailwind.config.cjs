/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': 'var(--background)',
        'highlights': 'var(--highlights)',
        'background-analogous-1': 'var(--background-analogous-1)',
        'background-analogous-2': '#var(--background-analogous-2)',
        'secondary': 'var(--secondary)'
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif']
      }
    }

  },
  plugins: [],
}
