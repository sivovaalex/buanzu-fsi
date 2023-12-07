/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {padding: '2aerm', center: true},
    extend: {
      fontFamily: {exo2: ['"Exo 2"', 'sans-serif']}
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

