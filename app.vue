<template>
	<NuxtPage dir="rtl" />
</template>

<script lang="ts" setup>
	useHead({
		title: 'AzkiVam Task'
	})

	const { $api } = useNuxtApp()

	const filterStore = useFilterStore()

	await useAsyncData('categories', () =>
		filterStore.getCategoriesList($api).then(() => true)
	)
	await useAsyncData('merchants', () =>
		filterStore.getMerchants($api).then(() => true)
	)
</script>
