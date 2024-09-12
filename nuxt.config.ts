// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: [
    "@unocss/reset/sanitize/sanitize.css",
    "@unocss/reset/sanitize/assets.css",
    "assets/css/base-styles.css",
  ],

  experimental: {
    viewTransition: true,
  },

  modules: ["nuxt-typed-router", "@unocss/nuxt", "@nuxt/eslint"],

  devServer: {
    port: 5173,
  },
});
