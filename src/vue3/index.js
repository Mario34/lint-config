module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    '../js/index.js',
    '../ts/index.js',
    '@vue/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
  },
}
