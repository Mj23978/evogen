import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts'], // Your entry point
  outDir: 'dist', // Output directory
  format: ['esm'], // CommonJS format
  sourcemap: false,
  noExternal: [/(.*)/],
  clean: true,
  shims: true, // Convert import.meta.url to a shim for CJS
  minify: false, // Set to true if you want to minify the output
  splitting: false, // Disable code splitting
})