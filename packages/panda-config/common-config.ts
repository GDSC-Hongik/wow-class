import { Config } from "@pandacss/dev";
import { defineConfig } from "@pandacss/dev";
import {
  pandaPreset,
  removeUnusedCssVars,
  removeUnusedKeyframes,
} from "wowds-theme";

const commonConfig: Config = {
  presets: [pandaPreset],
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
  jsxFramework: "react",
  exclude: [],
  outdir: "styled-system",
  hooks: {
    "cssgen:done": ({ artifact, content }) => {
      if (artifact === "styles.css") {
        return removeUnusedCssVars(removeUnusedKeyframes(content));
      }
    },
  },
};

export default defineConfig(commonConfig);
