// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['vuetify/styles', './assets/style/main.css', './assets/style/tailwind.css',],
  build: {
    transpile: ['vuetify'],
  },
})
