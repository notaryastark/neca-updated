/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
      },
      height: {
        '128' : '35rem'
      }
    }
  },
  plugins: [],
}

