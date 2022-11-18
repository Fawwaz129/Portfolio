/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'opensans': ['Open Sans', 'cursive'],
      'Montserrat': ['Montserrat', 'sans-serif'],
      'ComicNeue': ['Comic Neue', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}