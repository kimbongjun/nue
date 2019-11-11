module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  extends: "standard",
  // required to lint *.vue files
  plugins: ["html"],
  // add your custom rules here
  rules: {
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    quotes: "off",
    "no-extra-semi": "off",
    semi: 0
  },
  globals: {}
};
