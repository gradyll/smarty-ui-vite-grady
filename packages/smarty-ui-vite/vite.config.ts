import { defineConfig, UserConfig } from 'vite';
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
    assetFileNames: "style.[ext]"
  }
}

export const config = {
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
    outDir: "./dist",
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
    },
    coverage: {
      provider: "istanbul", // or 'c8',
      reporter: ["text", "json", "html"],
    },
  }
}


export default defineConfig(config as UserConfig)