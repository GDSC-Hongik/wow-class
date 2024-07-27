import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/index.tsx'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  splitting: false,
  dts: true,
  minify: true,
});
