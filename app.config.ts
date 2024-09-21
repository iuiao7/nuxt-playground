export default defineAppConfig({
  nuxtPlayground: {
    header: {
      nav: [{
        title: 'Docs',
        links: [{
          title: 'Getting Started',
          to: '/getting-started',
          description: 'Start building your document with shadcn-docs-nuxt',
        }, {
          title: 'API',
          to: '/api',
          description: 'Discover the configurations and exposed APIs.',
          target: '_self',
        }],
      }, {
        title: 'Credits',
        links: [{
          title: 'shadcn-ui',
          to: 'https://ui.shadcn.com/',
          description: 'For the beautiful component design & docs design',
          target: '_blank',
        }, {
          title: 'shadcn-vue',
          to: 'https://www.shadcn-vue.com/',
          description: 'For the vue port of shadcn-ui & some docs component source',
          target: '_blank',
        }, {
          title: 'Docus',
          to: 'https://docus.dev/',
          description: 'For inspiration & some docs component source',
          target: '_blank',
        }, {
          title: 'Nuxt Content',
          to: 'https://content.nuxt.com/',
          description: 'Content made easy for Vue Developers',
          target: '_blank',
        }],
      }],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
  },
})
