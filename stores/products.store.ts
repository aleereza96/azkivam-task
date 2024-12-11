import { defineStore } from 'pinia'
import type { Product } from '~/types/product.types'
import type { $Fetch } from 'nitropack'
import type { RepositoryOptions } from '~/types/repository.types'
import { productRepository } from '~/http/product.repository'

export const useProductsStore = defineStore('products', () => {
	const products = ref<Product[]>()
	const productCount = ref<number>()

	const getProductList = async (fetch: $Fetch, options?: RepositoryOptions) => {
		try {
			const response = await productRepository(fetch).fetchProductList(options)
			products.value = response.data
			productCount.value = response.totalItems
		} catch (error) {
			alert('Something Went wrong!!')
			console.log(error)
		}
	}

	const clearProducts = () => {
		products.value = []
	}

	return {
		products: products,
		getProductList,
		clearProducts
	}
})
