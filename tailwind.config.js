/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/sidebar/*.{js,html}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}