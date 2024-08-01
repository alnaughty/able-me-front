/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      keyframes:{
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0%)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-out-down': 'fade-out-down 1s ease-out',
        'fade-in': 'fade-in 3s ease-out',
      },
    },
    colors: {
      'purple': '#8C288C',
      'purple-30': '#8C288C',
      'purple-10': '#FA87FA',
      'purple-20': '#BD2DBD',
      'purple-40': '#8D298D',
      'white': '#FFFFFF',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}