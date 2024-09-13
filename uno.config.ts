// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetIcons(), presetAttributify()],
  theme: {
    fontFamily: {
      mono: "Operator Mono Lig, Operator Mono, JetBrains Mono, Monolisa, Monaco, Consolas, monospace",
    },
  },
});
