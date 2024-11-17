import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Nuxt 3 Template',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Nuxt 3 Template',
        },
      ],
      link: [
        // {
        //   rel: 'preload',
        //   as: 'style',
        //   href: '',
        // },
      ],
    },
  },

  css: [
    // See https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
    join(currentDir, './assets/css/global.css'),
  ],
  
  modules: [
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt'
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'CN',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
  },
})