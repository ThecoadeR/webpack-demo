/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-08 17:15:34
 * @LastEditTime: 2020-03-08 17:29:54
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: "babel-eslint",
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "no-extraneous-dependencies": 0,
    "no-console": 0
  },
};
