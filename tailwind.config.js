/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "playfair-display": ["Playfair Display", "sans-serif"]
      },
      fontSize: {
        "navigation-item": '20px'
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}
