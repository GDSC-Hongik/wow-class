const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "@wow-class/shared-config/eslint-config/next.js",
    require.resolve("@vercel/style-guide/eslint/next"),
  ],
};
