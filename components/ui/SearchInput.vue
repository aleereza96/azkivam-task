<template>
	<div class="relative">
		<input
			class="appearance-none border-2 ps-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight"
			id="model"
			type="text"
			:placeholder="title"
			v-model="model"
		/>
		<div class="absolute left-0 inset-y-0 flex items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="-ms-1 me-2 h-5 w-5 text-gray-400 hover:text-gray-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</div>

		<div class="absolute right-0 inset-y-0 flex items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 ms-1 text-gray-400 hover:text-gray-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { title = 'Search...' } = defineProps<{ title?: string }>()
	const model = defineModel()
</script>
