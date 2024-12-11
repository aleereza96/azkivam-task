import type { $Fetch } from 'nitropack'
import type { Merchant } from '~/types/merchant.types'
import type { RepositoryOptions } from '~/types/repository.types'

export const merchantRepository = (fetch: $Fetch) => ({
	async fetchMerchantList(
		options?: RepositoryOptions
	): Promise<{ data: Merchant[] }> {
		return await fetch<{ data: Merchant[] }>('merchants', {
			method: 'GET',
			...options
		})
	}
})
