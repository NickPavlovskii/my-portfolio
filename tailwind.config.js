/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './assets/**/*.{vue,js,ts}' // Добавьте, если используете стили в assets
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}