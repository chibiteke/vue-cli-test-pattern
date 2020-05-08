module.exports = {
  root: true,
  env: {
    browser: true, // ブラウザ環境有効 （DOM API (documentやonload等)）
    node: true, // Node.js環境を有効（Node.js 固有の変数や構文 (requireや特殊なトップレベル スコープ等)）
    es6: true, // ECMAScript 2015 (ES6) で書かれたコードを静的検証する
  },
  extends: [
    'plugin:vue/essential', // eslint-plugin-vue
    'eslint:recommended', // eslintの推奨ルール
    '@vue/prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module', // mapファイル作成
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
