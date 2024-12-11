import { useFilterStore } from '~/stores/filter.store'

export function useFilterUrlSync() {
	const route = useRoute()
	const router = useRouter()
	const filterStore = useFilterStore()

	const initializeFilters = () => {
		const { categoryId } = route.params
		const { merchantIds } = route.query

		if (categoryId) {
			filterStore.selectCategory(Number(categoryId))
		}

		if (merchantIds) {
			const ids = Array.isArray(merchantIds)
				? merchantIds.map(Number)
				: merchantIds.split(',').map(Number)
			filterStore.setMerchants(ids)
		}
	}

	const updateQuery = () => {
		const query = {
			...route.query,
			merchantIds: filterStore.selectedMerchantIds.length
				? filterStore.selectedMerchantIds.join(',')
				: undefined
		}

		router.replace({
			params: { ...route.params },
			query
		})
	}

	watch(
		() => ({
			merchantIds: filterStore.selectedMerchantIds
		}),
		updateQuery,
		{ deep: true }
	)

	watch(
		() => route.query,
		(newQuery) => {
			const { merchantIds } = newQuery

			if (merchantIds) {
				const ids = Array.isArray(merchantIds)
					? merchantIds.map(Number)
					: merchantIds.split(',').map(Number)
				filterStore.setMerchants(ids)
			} else {
				filterStore.clearMerchants()
			}
		},
		{ deep: true, immediate: true }
	)

	watch(
		() => route.params,
		(newParams) => {
			const { categoryId } = newParams

			if (categoryId) {
				filterStore.selectCategory(Number(categoryId))
			} else {
				filterStore.clearCategory()
			}
		},
		{ immediate: true }
	)

	initializeFilters()

	return {
		initializeFilters
	}
}
