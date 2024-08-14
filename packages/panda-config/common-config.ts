import { Config } from "@pandacss/dev";
import { defineConfig } from "@pandacss/dev";
import {
  pandaPreset,
  removeUnusedCssVars,
  removeUnusedKeyframes,
} from "wowds-theme";
import { typography } from "wowds-tokens";

const commonConfig: Config = {
  presets: [pandaPreset],
  //TODO: wowds-theme의 preset에서 staticCss 를 정의하도록 수정
  staticCss: {
    css: [
      {
        properties: {
          ...(pandaPreset?.staticCss?.css?.[0]?.properties?.color && {
            color: pandaPreset.staticCss.css[0].properties.color,
          }),
          textStyle: Object.keys(typography),
        },
      },
    ],
  },
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
