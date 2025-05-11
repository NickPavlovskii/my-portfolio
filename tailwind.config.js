// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{vue,js,ts,jsx,tsx}',
      './layouts/**/*.{vue,js,ts,jsx,tsx}',
      './components/**/*.{vue,js,ts,jsx,tsx}',
      './app.vue',
    ],
    theme: {
      extend: {},
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    plugins: [],
  }
  