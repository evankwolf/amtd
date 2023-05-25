import path from 'path'

import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import * as packageJson from './package.json'

import type { BuildOptions } from 'vite'

const rollupOptions = {
  external: [...Object.keys(packageJson.dependencies)],
}

const build1: BuildOptions = {
  outDir: 'dist/es',
  rollupOptions,
  // rollupOptions: {
  //   external: ['react', 'react-dom'],
  //   input: ['src/main.tsx'],
  //   output: [
  //     {
  //       format: 'es',
  //       entryFileNames: '[name].js',
  //       preserveModules: true,
  //       exports: 'named',
  //       dir: 'amtd/es',
  //       preserveModulesRoot: 'src',
  //     },
  //   ],
  // },
  lib: {
    entry: './src/main.tsx',
    formats: ['es'],
    name: 'amtd',
    fileName: 'main',
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: build1,
  plugins: [
    react(),
    UnoCSS({ /* options */ }),
    dts(),
  ],
})
