/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@wow-class/shared-config/eslint/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
