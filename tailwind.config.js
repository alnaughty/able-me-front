/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    },
    colors: {
      'purple': '#8C288C',
      'purple-10': '#FA87FA',
      'purple-20': '#BD2DBD',
      'white': '#FFFFFF',
    }
  },
  plugins: [],
}