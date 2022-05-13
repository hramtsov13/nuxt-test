import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  buildModules: [
    ['nuxt-windicss', { analyze: true }],
    [
      '@intlify/nuxt3',
      {
        localeDir: 'locales',
      },
    ],
  ],
});
