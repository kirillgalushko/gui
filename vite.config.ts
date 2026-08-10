import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [vue(), libInjectCss()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "gui",
      fileName: (format) => `gui.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "[name].js",
        assetFileNames: (assetInfo) =>
          /\.(?:eot|woff2?|ttf)$/i.test(assetInfo.names[0] ?? "")
            ? "fonts/[name][extname]"
            : "assets/[name]-[hash][extname]",
      },
    },
  },
});
