// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetIcons(), presetAttributify(), presetAnimations(), presetShadcn()],
  theme: {
    fontFamily: {
      mono: "Operator Mono Lig, Operator Mono, JetBrains Mono, Monolisa, Monaco, Consolas, monospace",
    },
  },
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        "components/**/*.{js,ts}",
      ],
    },
  },
  rules: [[/^view-transition-name-\[(.+)\]$/, ([, name]) => ({ "view-transition-name": name })]],
});
