/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], // Or wherever your HTML files live
  theme: {
    extend: {
      colors: {
        darkblue: '#333994', // 👈 your custom color name and hex
      },
    },
  },
  plugins: [],
}
