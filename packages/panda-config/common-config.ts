import { Config } from "@pandacss/dev";
import { defineConfig } from "@pandacss/dev";

const commonConfig: Config = {
  //TODO: wow-theme preset 추가
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
  jsxFramework: "react",
  exclude: [],
  outdir: "styled-system",
};

export default defineConfig(commonConfig);
