<template>
	<div
		class="bg-white border border-black rounded-xl w-full grid md:grid-cols-4 gap-0 divide-x divide-y"
	>
		<Product v-for="product in products" :key="product.id" :product="product" />
	</div>
</template>

<script lang="ts" setup>
	const { products } = useProductsStore()
</script>
