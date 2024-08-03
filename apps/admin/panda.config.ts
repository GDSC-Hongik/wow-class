import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  //TODO: wowds-theme 의 preset 추가
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
  jsxFramework: "react",
  include: ["./app/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  outdir: "styled-system",
});
