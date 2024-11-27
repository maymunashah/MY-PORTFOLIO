/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './public/index.html',                     // If you have any Tailwind classes in your index.html
    '.src/**/*.{vue,js,ts,jsx,tsx}',           // Vue components, JS files, or any other relevant source files
    '.src/assets/**/*.{html,vue,js}',          // If you use Tailwind in assets (like images, styles)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
