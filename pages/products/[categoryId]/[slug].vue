<template>
	<div class="flex md:px-20 md:py-10">
		<Filter />

		<div class="w-4/5 flex flex-col ms-10 py-10 md:py-0">
			<ProductList />

			<!-- <div ref="product-tail" class="py-5 h-2 w-full">
				<div v-if="infiniteScrollLoading">Loading...</div>

				<div v-else-if="!hasMore" class="py-5">No more products</div>
			</div> -->
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { $api } = useNuxtApp()

	const { getProductList, clearProducts, products } = useProductsStore()
	const {
		getCategoriesList,
		getMerchants,
		selectedMerchantIds,
		selectedCategoryId
	} = useFilterStore()
	// const { infiniteScrollLoading, hasMore, observeElement } = useInfiniteScroll(
	// 	fetchProducts,
	// 	10
	// )

	// const productListTailElement = useTemplateRef('product-tail')

	// watch(
	// 	[selectedCategoryId, selectedMerchantIds],
	// 	() => {
	// 		clearProducts()
	// 		fetchProducts({ page: 1, size: 10 })
	// 	},
	// 	{ deep: true }
	// )

	const { data: f } = await useAsyncData('categories', () =>
		getCategoriesList($api)
	)
	const { data: d } = await useAsyncData('merchants', () => getMerchants($api))

	const { data: p } = await useAsyncData('products', () =>
		fetchProducts({ page: 1, size: 10 })
	)
	// onMounted(() => {
	// 	if (productListTailElement.value)
	// 		observeElement(productListTailElement.value)
	// })

	async function fetchProducts(query?: { page: number; size: number }) {
		const fetchOptions = {
			body: { merchantIds: selectedMerchantIds },
			params: selectedCategoryId
				? { categoryId: selectedCategoryId }
				: undefined,
			query
		}

		return await getProductList($api, fetchOptions)
	}

	function useInfiniteScroll(
		fetchItemsCallback: any,
		size: number,
		initPage: number = 1
	) {
		const infiniteScrollLoading = ref(false)
		const hasMore = ref(true)
		const observer = ref<IntersectionObserver | null>(null)
		const page = ref<number>(initPage)

		const observeElement = (target: Element) => {
			if (!target) return

			observer.value = new IntersectionObserver(async ([entry]) => {
				if (
					entry.isIntersecting &&
					!infiniteScrollLoading.value &&
					hasMore.value
				) {
					infiniteScrollLoading.value = true
					const fetchOption = { size, page: page.value }
					await fetchItemsCallback(fetchOption)
					if (!products || products.length === 0) {
						hasMore.value = false
					}
					infiniteScrollLoading.value = false
					page.value = page.value + 1
				}
			})

			observer.value.observe(target)
		}

		const disconnectObserver = () => {
			if (observer.value) {
				observer.value.disconnect()
				observer.value = null
			}
		}

		onUnmounted(() => {
			disconnectObserver()
		})

		return { infiniteScrollLoading, hasMore, observeElement }
	}
</script>

<style></style>
