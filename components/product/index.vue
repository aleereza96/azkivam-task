<template>
	<div class="p-5 flex flex-col justify-between ">
		<img :src="product.imageUrl" :alt="product.name" srcset="" class="mb-2" />

		<div
			class="overflow-hidden text-ellipsis w-full mb-4"
			style="
				display: -webkit-box;
				line-clamp: 2;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			"
		>
			{{ product.name }}
		</div>

		<div>
			<div class="text-gray-600 text-sm">min Price:</div>
			<div class="font-bold">{{ formattedPrice }}</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import type { Product } from '~/types/product.types'

	const { product } = defineProps<{
		product: Product
	}>()

	const formattedPrice = computed(() =>
		product.minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	)
</script>
