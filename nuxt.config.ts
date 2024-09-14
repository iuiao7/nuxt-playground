// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["@unocss/reset/tailwind.css", "assets/css/base.css"],

  experimental: {
    viewTransition: true,
  },

  modules: ["nuxt-typed-router", "@unocss/nuxt", "@nuxt/eslint", "shadcn-nuxt"],

  devServer: {
    port: 5173,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
});
