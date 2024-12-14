import { defineStore } from 'pinia'
import type { $Fetch } from 'nitropack'
import type { Merchant } from '~/types/merchant.types'
import { buildCategoryTree } from '~/lib/utils'
import { categoryRepository } from '~/http/categories.repository'
import { merchantRepository } from '~/http/merchants.repository'
import type { CategoryTree } from '~/types/category.types'

export const useFilterStore = defineStore('filter', () => {
	const selectedCategoryId = ref<number | null>(null)
	const selectedMerchantIds = ref<number[]>([])
	const categories = ref<CategoryTree[]>([])
	const merchants = ref<Merchant[]>([])


	const getCategoriesList = async (fetch: $Fetch) => {
		try {
			const response = await categoryRepository(fetch).fetchCategoryList()
			categories.value = buildCategoryTree(response.data)
		} catch (error) {
			alert('Something Went Wrong!')
		}
	}

	const getMerchants = async (fetch: $Fetch) => {
		try {
			const response = await merchantRepository(fetch).fetchMerchantList()
			merchants.value = response.data
		} catch (error) {
			alert('Something Went Wrong!')
			console.log(error)
		}
	}

	const selectCategory = (id: number) => {
		selectedCategoryId.value = id
	}

	const clearCategory = () => {
		selectedCategoryId.value = null
	}

	const selectMerchant = (id: number) => {
		selectedMerchantIds.value?.push(id)
	}
	const setMerchants = (ids: number[]) => {
		selectedMerchantIds.value = ids
	}

	const clearMerchants = () => {
		selectedMerchantIds.value = []
	}

	const unselectMerchant = (id: number) => {
		selectedMerchantIds.value = selectedMerchantIds.value?.filter(
			(mId) => mId !== id
		)
	}

	return {
		getCategoriesList,
		getMerchants,
		selectCategory,
		clearCategory,
		selectMerchant,
		unselectMerchant,
		setMerchants,
		clearMerchants,
		categories,
		merchants,
		selectedCategoryId: readonly(selectedCategoryId),
		selectedMerchantIds: readonly(selectedMerchantIds)
	}
})
