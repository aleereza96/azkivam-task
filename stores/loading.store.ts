import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
	const loading = ref<boolean>(false)

	const setLoading = (state: boolean) => {
		loading.value = state
	}

	return {
		loading: readonly(loading),
		setLoading
	}
})
