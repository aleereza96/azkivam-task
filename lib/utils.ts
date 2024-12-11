import type { Category, CategoryTree } from '~/types/category.types'

type IdMap = Record<number, CategoryTree>

export function buildCategoryTree(data: Category[]) {
	const idMap: IdMap = {}
	const tree: CategoryTree[] = []

	if (!data.length) return []

	data.forEach((item) => {
		idMap[item.id] = { ...item, open: false, children: [] }
	})

	data.forEach((item) => {
		if (item.parent === null) {
			idMap[item.id].open = true
			tree.push(idMap[item.id])
		} else {
			if (idMap[item.parent]) {
				idMap[item.parent].children.push(idMap[item.id])
			}
		}
	})

	return tree
}
