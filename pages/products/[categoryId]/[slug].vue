<template>
	<ProductPage :fetch-products="fetchProducts" />
</template>

<script lang="ts" setup>
	const { $api } = useNuxtApp()
	const productStore = useProductsStore()
	const filterStore = useFilterStore()
	const { selectedMerchantIds, selectedCategoryId } = storeToRefs(filterStore)

	watch(
		[selectedCategoryId, selectedMerchantIds],
		() => {
			productStore.clearProducts()
			fetchProducts({ page: 1, size: 10 })
		},
		{ deep: true }
	)

	async function fetchProducts(query?: { page: number; size: number }) {
		const fetchOptions = {
			body: { merchantIds: selectedMerchantIds.value },
			query
		}

		return await productStore.getProductListByCategoryId(
			$api,
			selectedCategoryId.value as number,
			fetchOptions
		)
	}
</script>

<style></style>
