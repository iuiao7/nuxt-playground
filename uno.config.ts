// uno.config.ts
import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetIcons()],
  theme: {
    fontFamily: {
      mono: "Operator Mono Lig, Operator Mono, JetBrains Mono, Monolisa, Monaco, Consolas, monospace",
    },
  },
});
