// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "vuetify/styles",
    "./assets/style/main.css",
    "./assets/style/tailwind.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  plugins: [{ src: "~/plugins/apexcharts.client.js", mode: "client" }],
  ssr: false,
  target: "static",
  app: {
    baseURL: "/my-portfolio", // ВАЖНО: имя твоего репозитория на GitHub
  },
});
