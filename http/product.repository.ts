import type { $Fetch } from 'nitropack'
import type { Product } from '~/types/product.types'
import type { RepositoryOptions } from '~/types/repository.types'

export const productRepository = (fetch: $Fetch) => ({
	async fetchProductList(
		options?: RepositoryOptions
	): Promise<{ data: Product[]; totalItems: number }> {
		return await fetch<{ data: Product[]; totalItems: number }>('products', {
			method: 'POST',
			...options
		})
	},

	async fetchProductListByCategoryId(
		catId: number,
		options?: RepositoryOptions
	): Promise<{ data: Product[]; totalItems: number }> {
		return await fetch<{ data: Product[]; totalItems: number }>(
			`products/${catId}`,
			{
				method: 'POST',
				...options
			}
		)
	}
})
