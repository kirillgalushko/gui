import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import libAssetsPlugin from "@laynezh/vite-plugin-lib-assets";

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [
        path.resolve(process.cwd(), 'src/assets/icons'),
      ],
      symbolId: 'icon-[dir]-[name]',
    }),
    libInjectCss(),
    libAssetsPlugin({
      include: /\.(eot|woff2?|ttf)(\?.*)?(#.*)?$/,
      name: "fonts/[name].[ext]",
    }),
    libAssetsPlugin({
      include: /\.(svg)(\?.*)?(#.*)?$/,
      name: "svg/[name].[ext]",
    }),
    libAssetsPlugin({
      include: /\.(png|jpeg|jpg|gif|webp)(\?.*)?(#.*)?$/,
      name: "images/[name].[ext]",
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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
          if (id.includes('src/components/')) {
            const componentName = id.split('src/components/')[1].split('/')[0];
            return `components/${componentName}`;
          }
        },
        inlineDynamicImports: false,
      },
    },
  },
})
