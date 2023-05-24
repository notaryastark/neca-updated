/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'blue-gray': '#B3C2D7'
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
      }
    }
  },
  plugins: [],
}

