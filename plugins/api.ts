export default defineNuxtPlugin({
	setup() {
		const config = useRuntimeConfig()
		const router = useRouter()

		const api = $fetch.create({
			baseURL: config.public.apiBaseUrl,
			async onResponse({ response }) {
				return await response._data
			},
			async onResponseError({ request, response, options }) {
				if (response) {
					throw response._data[0]
				} else {
					router.push('/server-error')
				}
			}
		})

		return {
			provide: {
				api
			}
		}
	}
})
