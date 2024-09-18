import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    unocss: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  }),
)
