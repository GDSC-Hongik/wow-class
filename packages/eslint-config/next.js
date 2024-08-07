/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./basic.js", require.resolve("@vercel/style-guide/eslint/next")],
};
