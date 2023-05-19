/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    fontFamily: {
      'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}

