import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			apiEndpoint: '',
		},
	},

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
					content: 'Nuxt 3 Template',
				},
			],
		},
	},

	css: [join(currentDir, './assets/css/global.css')],

	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
		minify: true,
	},

	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@pinia/nuxt',
		'@nuxt/eslint',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
		'nuxt-og-image',
	],

	eslint: {
		// Additional configs
	},

	shadcn: {
		componentDir: './components/ui',
	},

	sitemap: {
		sources: ['/api/urls'],
	},
});
