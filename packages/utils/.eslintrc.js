/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@wow-class/eslint-config/basic.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-useless-catch": "off",
  },
};
