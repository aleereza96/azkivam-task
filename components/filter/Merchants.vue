<template>
	<div class="relative">
		<UiSearchInput
			v-model="searchInput"
			:title="searchTitle"
			class="mb-4 top-0 sticky"
		/>

		<ul class="max-h-96 overflow-y-scroll">
			<li v-for="merchant in merchants" :key="merchant.id" class="py-2">
				<label class="inline-flex  px py-2 text-sm text-gray-700">
					<input
						type="checkbox"
						class="form-checkbox h-5 w-5 text-gray-600"
						:id="`merchant-id-${merchant.id}`"
						:checked="selectedMerchantIds.includes(merchant.id)"
						@input="(event) => checkMerchant(merchant.id, event)"
					/>
					<span class="ms-2">{{ merchant.name }}</span>
				</label>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	import { useRouteParamManager } from '~/composables/useRouteParamManager'

	const { selectedMerchantIds, merchants } = useFilterStore()

	const searchTitle = ref<string>('Search Merchants')
	const searchInput = ref<string>()

	const { addToArrayParam, removeFromArrayParam } = useRouteParamManager()

	const checkMerchant = (merchantId: number, event: Event) => {
		if ((event.target as HTMLInputElement).checked === true) {
			addToArrayParam('merchantIds', [merchantId.toString()])
		} else {
			removeFromArrayParam('merchantIds', merchantId.toString())
		}
	}
</script>
