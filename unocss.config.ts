import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        sans: [
          {
            name: "Open Sans",
            provider: "google",
            weights: ["300", "400", "500", "600", "700", "800"],
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
