import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    // Pass CI when no tests are found (until tests are added)
    passWithNoTests: true,
    // Include src directory for unit tests only
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}', 'tests/unit/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    // Exclude node_modules, build output, and e2e tests (run by Playwright)
    exclude: ['node_modules', 'dist', '.next', 'tests/e2e/**'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
