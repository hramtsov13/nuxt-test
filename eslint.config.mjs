import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  ...eslintPluginPrettierRecommended,
  plugins: [
    "prettier",
  ],
  
  rules: {
    "prettier/prettier": "error"
  },
});
