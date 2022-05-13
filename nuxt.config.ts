import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  buildModules: [
    ['nuxt-windicss'],
    [
      '@intlify/nuxt3',
      {
        localeDir: 'locales',
      },
    ],
    ['@pinia/nuxt'],
  ],
});
