/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "google"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    "quotes-props": "off",
    "require-jsdoc": "off",
    quotes: "off",
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": "off",
    "react/prop-types": "off",
  },
};
