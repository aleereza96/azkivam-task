import { useRouter, useRoute } from 'vue-router'

export const useRouteParamManager = () => {
	const router = useRouter()
	const route = useRoute()

	const addToArrayParam = (paramKey: string, itemsToAdd: string[]) => {
		const currentArray = Array.isArray(route.query[paramKey])
			? [...route.query[paramKey]]
			: []

		const updatedArray = [...new Set([...currentArray, ...itemsToAdd])]

		router.push({
			query: {
				...route.query,
				[paramKey]: updatedArray
			}
		})
	}

	const removeFromArrayParam = (paramKey: string, itemToRemove: string) => {
		const currentArray = Array.isArray(route.query[paramKey])
			? [...route.query[paramKey]]
			: []

		const updatedArray = currentArray.filter((item) => item !== itemToRemove)

		const newQuery = { ...route.query }
		if (updatedArray.length > 0) {
			newQuery[paramKey] = updatedArray
		} else {
			delete newQuery[paramKey]
		}

		router.push({ query: newQuery })
	}

	return {
		addToArrayParam,
		removeFromArrayParam
	}
}
