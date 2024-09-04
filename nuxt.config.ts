// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  css: ["@unocss/reset/tailwind-compat.css", "~/assets/css/base-styles.css"],

  experimental: {
    viewTransition: true,
  },

  modules: ["nuxt-typed-router", "@unocss/nuxt", "@nuxt/eslint"],
});
