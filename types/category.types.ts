export type Category = {
	id: number
	name: string
	slug: string
	enabled: boolean
	priority: number
	mapped: boolean
	parent: number | null
}

export type CategoryTree = Category & {
	children: CategoryTree[]
	open: boolean
}
