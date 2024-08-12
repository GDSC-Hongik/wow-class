import { defineConfig } from "@pandacss/dev";
import commonConfig from "@wow-class/panda-config/common-config";

import { typography } from "wowds-tokens";

export default defineConfig({
  ...commonConfig,
  staticCss: {
    css: [
      {
        properties: {
          textStyle: Object.keys(typography),
        },
      },
    ],
  },
  dependencies: ["./src/components/**"],
  include: ["./src/**/*.{ts,tsx,js,jsx}"],
});
