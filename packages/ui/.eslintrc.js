/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@wow-class/shared-config/eslint/basic.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};
