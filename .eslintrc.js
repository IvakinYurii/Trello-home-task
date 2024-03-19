module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:wdio/recommended",
    "plugin:chai-friendly/recommended",
    "prettier",
  ],
  globals: {
    assert: "readonly",
    wdioExpect: "readonly",
  },
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["wdio", "chai-friendly"],
  rules: {
    "no-var": "warn",
    "no-unused-vars": "warn",
    "wdio/no-pause": "off",
  },
};
