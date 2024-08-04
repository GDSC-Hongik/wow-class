/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@wow-class/eslint-config/basic.js",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
