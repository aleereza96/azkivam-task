<template>
	<div class="flex px-5 md:px-20 py-10 relative">
		<Filter class="w-1/5" />

		<div class="w-4/5 flex flex-col ms-10">
			<ProductList />

			<div ref="product-tail" class="py-5 h-2 w-full">
				<div v-if="infiniteScrollLoading">Loading...</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { fetchProducts } = defineProps<{
		fetchProducts: (query?: { page: number; size: number }) => Promise<void>
	}>()

	const productStore = useProductsStore()

	const { productCount } = storeToRefs(productStore)
	const { initializeFilters } = useFilterUrlSync()
	const { infiniteScrollLoading, hasMore, observeElement } = useInfiniteScroll(
		fetchProducts,
		10
	)

	const productListTailElement = useTemplateRef('product-tail')

	await useAsyncData('products', () =>
		fetchProducts({ page: 1, size: 10 }).then(() => true)
	)

	onMounted(() => {
		if (productListTailElement.value) {
			observeElement(productListTailElement.value)
		}
		initializeFilters()
	})

	onUnmounted(() => productStore.clearProducts)

	function useInfiniteScroll(fetchItemsCallback: any, size: number) {
		const infiniteScrollLoading = ref(false)

		const observer = ref<IntersectionObserver | null>(null)
		const page = ref<number>(1)

		const hasMore = computed(
			() => page.value * size < Number(productCount.value)
		)

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
