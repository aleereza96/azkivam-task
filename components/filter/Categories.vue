<template>
	<div
		v-show="item.open"
		:style="{ marginInlineStart: `${levelMargin}px` }"
		class="mt-2"
	>
		<div class="flex justify-between">
			<span
				class="cursor-pointer"
				:class="selectedItem ? 'font-bold' : ''"
				@click="selectItem(item)"
			>
				{{ item.name }}
			</span>
			<span
				v-if="item.children.length"
				@click="toggleChildren(item)"
				class="text-xl cursor-pointer"
			>
				{{ childrenSelected ? '^' : '>' }}
			</span>
		</div>
	</div>

	<div v-if="item.children.length">
		<Categories
			v-for="child in item.children"
			:key="child.id"
			:item="child"
			:level="level + 1"
		/>
	</div>
</template>

<script lang="ts" setup>
	import type { CategoryTree } from '~/types/category.types'

	const { level = 0, item } = defineProps<{
		item: CategoryTree
		level?: number
	}>()

	const { selectedCategoryId } = useFilterStore()

	const selectItem = (item: CategoryTree) => {
		return navigateTo({
			path: `/products/${item.id}/${item.slug}`
		})
	}

	const toggleChildren = (item: CategoryTree) => {
		item.children.forEach((child) => (child.open = !child.open))
	}

	const levelMargin = computed(() => level * 20)

	const selectedItem = computed(() => selectedCategoryId === item.id)

	const childrenSelected = computed(() =>
		item.children.some((child) => !!child.open)
	)
</script>
