// uno.config.ts
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno()],
  theme: {
    fontFamily: {
      mono: "Operator Mono Lig, Operator Mono, JetBrains Mono, Monolisa, Monaco, Consolas, monospace",
    },
  },
});
