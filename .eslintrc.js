module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "object-shorthand": "error",
  },
};
