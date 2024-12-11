<template>
	<span
		class="block md:hidden absolute ms-5 mt-2 cursor-pointer"
		@click="() => (showFilter = !showFilter)"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			width="20px"
			height="20px"
		>
			<path
				d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
			/>
		</svg>
	</span>
	<div
		:class="showFilter ? '!block  fixed ' : ''"
		class="border border-black rounded-xl bg-white text-black px-4 h-[700px] overflow-y-auto md:w-1/5 hidden md:block"
	>
		<div class="flex justify-between my-2 text-lg">
			<span>Filters</span>
			<span
				class="block md:hidden cursor-pointer text-red-300"
				@click="() => (showFilter = false)"
				>x</span
			>
		</div>
		<div class="px-8 "><hr /></div>
		<FilterCategories v-for="categoryItem in categories" :item="categoryItem" />
		<div class="px-8 my-5"><hr /></div>
		<FilterMerchants />
	</div>
</template>

<script lang="ts" setup>
	const filterStore = useFilterStore()

	const { categories } = storeToRefs(filterStore)

	const showFilter = ref(false)
</script>
