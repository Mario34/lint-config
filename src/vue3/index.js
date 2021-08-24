module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    '@vue/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '../js/index.js',
    '../ts/index.js',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
  },
}
