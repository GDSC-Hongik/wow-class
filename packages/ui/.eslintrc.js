/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@wow-class/eslint-config/basic.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
