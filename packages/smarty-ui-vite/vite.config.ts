import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from "./config/unocss";
// import RollupCopy from 'rollup-plugin-copy'
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    },
    // chunkFileNames: "assets/js/[name]-[hash].js",
    // entryFileNames: "assets/js/[name]-[hash].js",
    assetFileNames: "assets/[name].[ext]"
  }
}


export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    // RollupCopy({
    //   targets: [
    //     { src: 'package.json', dest: 'dist' },
    //   ],
    //   hook: 'writeBundle'
    // })
  ],
  build: {
    rollupOptions,
    minify: 'terser',
    cssCodeSplit: true,
    sourcemap: true,
    brotliSize: true,
    lib: {
      entry: './src/entry.ts',
      name: "SmartyUI",
      fileName: 'smarty-ui',
      formats: ["esm", "umd", "iife"]
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})