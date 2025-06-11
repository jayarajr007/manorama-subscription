/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',            // ✅ root HTML files (very important)
    './dist/**/*.html',    // ✅ (if you have HTML inside dist too)
    './dist/assets/js/**/*.js'  // ✅ scan your JS files too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
