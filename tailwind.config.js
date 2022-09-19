/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        "light-cream": "#F3EBE3",
        "dark-black": "#2A2A3C",
        "theme-gold": "#F7B300",
        "theme-grey": "#8C8E91",
        "theme-green": "#133416"
      },
      fontFamily: {
        Inter: ['Inter']
      }
    },
  },
  plugins: [],
}
