// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  css: ['~/assets/css/base-styles.css'],
  experimental: {
    viewTransition: true
  },
  hooks: {
    'pages:extend'(routes) {
      console.log(routes);  // 获取所有生成的路由
    }
  }
})
