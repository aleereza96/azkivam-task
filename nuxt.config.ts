// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			apiBaseUrl: 'https://interview-api.azkivam.com/api/v1/'
		}
	},
	modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss']
})
