/// <reference types="vitest/config" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  server: {
    port: 3000,
  },

  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    AutoImport({
      imports: ['vue', 'vue/macros', 'pinia'],
      dts: true,
      dirs: ['./src/composables', './src/store'],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Unocss(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['src/**/*.spec.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },

  build: {
    sourcemap: true,
    modulePreload: {
      resolveDependencies: () => [],
    },
  },
})
