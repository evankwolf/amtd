import { defineConfig } from 'vitest/config'

export default defineConfig({
  server: {
    hmr: {
      overlay: false
    }
  },
  test: {
    // ...
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
})
