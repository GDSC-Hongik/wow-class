import { defineConfig } from "@pandacss/dev";
import commonConfig from "@wow-class/panda-config/common-config";

export default defineConfig({
  ...commonConfig,
  include: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
});
