import { defineConfig } from "@pandacss/dev";
import commonConfig from "@wow-class/panda-config/common-config";

export default defineConfig({
  ...commonConfig,
  include: ["./src/**/*.{ts,tsx,js,jsx}"],
});
