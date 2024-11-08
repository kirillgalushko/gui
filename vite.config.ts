import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import libAssetsPlugin from "@laynezh/vite-plugin-lib-assets";

export default defineConfig({
  plugins: [
    vue(),
    libInjectCss(),
    libAssetsPlugin({
      include: /\.(eot|woff2?|ttf)(\?.*)?(#.*)?$/,
      name: "fonts/[name].[ext]",
      outputPath: './'
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'gui',
      fileName: (format) => `gui.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
