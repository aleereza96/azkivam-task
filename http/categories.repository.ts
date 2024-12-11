import type { $Fetch } from 'nitropack'
import type { Category } from '~/types/category.types'
import type { RepositoryOptions } from '~/types/repository.types'

export const categoryRepository = (fetch: $Fetch) => ({
	async fetchCategoryList(
		options?: RepositoryOptions
	): Promise<{ data: Category[] }> {
		return await fetch<{ data: Category[] }>('categories', {
			method: 'GET',
			...options
		})
	}
})
