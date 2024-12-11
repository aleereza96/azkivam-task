import type { $Fetch } from 'nitropack'
import type { Product } from '~/types/product.types'
import type { RepositoryOptions } from '~/types/repository.types'

export const productRepository = (fetch: $Fetch) => ({
	async fetchProductList(
		options?: RepositoryOptions
	): Promise<{ data: Product[]; totalItems: number }> {
		// return await fetch<{ data: Product[]; totalItems: number }>('products', {
		// 	method: 'POST',
		// 	...options
		// })

		return await testData()
	}
})

const testData = () => {
	return new Promise<{ data: Product[]; totalItems: number }>(
		(resolve, reject) => {
			resolve({
				data: [
					{
						id: 'Ybwc_okBd7CINZ3k6Yv1',
						name: 'Galaxy A24 128GB RAM 6GB',
						slug: 'galaxy-a24-128gb-ram-6gb',
						available: true,
						categoryId: 47,
						categoryName: 'کالای دیجیتال',
						minPrice: 102990000,
						maxPrice: 102990000,
						imageUrl:
							'https://ghestchy.ir/wp-content/uploads/2023/08/unnamed-file-17.jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'قسطچی',
						merchantId: 263562
					},
					{
						id: 'MDjiCIcB7H0oYVqArb1_',
						name: 'گوشی سامسونگ S21 FE 5G | حافظه 256 رم 8 گیگابایت Samsung Galaxy S21 FE',
						slug: 'گوشی-سامسونگ-s21-fe-5g-|-حافظه-256-رم-8-گیگابایت-samsung-galaxy-s21-fe',
						available: true,
						categoryId: 47,
						categoryName: 'کالای دیجیتال',
						minPrice: 209990000,
						maxPrice: 209990000,
						imageUrl: 'https://ghestchy.ir/wp-content/uploads/2022/10/18-1.jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'قسطچی',
						merchantId: 263562
					},
					{
						id: 'V7wc_okBd7CINZ3k6IvQ',
						name: 'گوشی موبایل سامسونگ مدل Galaxy S21 FE 5G دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت',
						slug: 'گوشی-موبایل-سامسونگ-مدل-galaxy-s21-fe-5g-دو-سیم‌-کارت-ظرفیت-256-گیگابایت-و-رم-8-گیگابایت',
						available: true,
						categoryId: 48,
						categoryName: 'گوشی موبایل',
						minPrice: 229990000,
						maxPrice: 229990000,
						imageUrl:
							'https://ghestchy.ir/wp-content/uploads/2023/08/unnamed-file-19.jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'قسطچی',
						merchantId: 263562
					},
					{
						id: 'Xrwc_okBd7CINZ3k6YuW',
						name: 'گوشی موبایل سامسونگ مدل Galaxy A34 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت',
						slug: 'گوشی-موبایل-سامسونگ-مدل-galaxy-a34-5g-دو-سیم-کارت-ظرفیت-128-گیگابایت-و-رم-8-گیگابایت',
						available: true,
						categoryId: 48,
						categoryName: 'گوشی موبایل',
						minPrice: 139990000,
						maxPrice: 139990000,
						imageUrl:
							'https://ghestchy.ir/wp-content/uploads/2023/08/unnamed-file-18.jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'قسطچی',
						merchantId: 263562
					},
					{
						id: 'F1D1ZYsBMqeUDDh7c3ED',
						name: 'گوشی موبایل شیائومی مدل Redmi A2 plus دو سیم کارت ظرفیت 64 گیگابایت و رم 3 گیگابایت',
						slug: 'گوشی-موبایل-شیائومی-مدل-redmi-a2-plus-دو-سیم-کارت-ظرفیت-64-گیگابایت-و-رم-3-گیگابایت',
						available: true,
						categoryId: 48,
						categoryName: 'گوشی موبایل',
						minPrice: 32500000,
						maxPrice: 32500000,
						imageUrl:
							'https://meghdadit.com/files/product/8djsg7gzmtfzbq511miyrssrnl8f0c4pdnmx0m6owiod2mb73a[Medium].jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'مقداد آی‌تی',
						merchantId: 2661
					},
					{
						id: 'F1D1ZYsBMqeUDDh7c3ED',
						name: 'گوشی موبایل شیائومی مدل Redmi A2 plus دو سیم کارت ظرفیت 64 گیگابایت و رم 3 گیگابایت',
						slug: 'گوشی-موبایل-شیائومی-مدل-redmi-a2-plus-دو-سیم-کارت-ظرفیت-64-گیگابایت-و-رم-3-گیگابایت',
						available: true,
						categoryId: 48,
						categoryName: 'گوشی موبایل',
						minPrice: 32500000,
						maxPrice: 32500000,
						imageUrl:
							'https://meghdadit.com/files/product/8djsg7gzmtfzbq511miyrssrnl8f0c4pdnmx0m6owiod2mb73a[Medium].jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'مقداد آی‌تی',
						merchantId: 2661
					},
					{
						id: 'PjxDOosBMqeUDDh7YRxa',
						name: 'گوشی موبایل سامسونگ مدل Galaxy A04 دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت',
						slug: 'گوشی-موبایل-سامسونگ-مدل-galaxy-a04-دو-سیم-کارت-ظرفیت-32-گیگابایت-و-رم-3-گیگابایت',
						available: true,
						categoryId: 48,
						categoryName: 'گوشی موبایل',
						minPrice: 33500000,
						maxPrice: 33500000,
						imageUrl:
							'https://meghdadit.com/files/product/yfoi6kxyh1544qmfntinbxuljer8yvszx083xel7ziu0bfhiu1[Medium].jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'مقداد آی‌تی',
						merchantId: 2661
					},
					{
						id: 'WDxDOosBMqeUDDh7ZByl',
						name: 'گوشی موبایل ویکو مدل T10 دو سیم کارت ظرفیت 64GB رم 2GB',
						slug: 'گوشی-موبایل-ویکو-مدل-t10-دو-سیم-کارت-ظرفیت-64gb-رم-2gb',
						available: true,
						categoryId: 48,
						categoryName: 'گوشی موبایل',
						minPrice: 37990000,
						maxPrice: 37990000,
						imageUrl:
							'https://meghdadit.com/files/product/mjh8ej7qgn3b6lkh7hhshqgs3n0jbenh05sppurzfpkee3af8e[Medium].jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'مقداد آی‌تی',
						merchantId: 2661
					},
					{
						id: 'Eb5DA4oBd7CINZ3kJlXP',
						name: 'باندل موس و موس پد و هدست ریزر Razer Battle Bundle',
						slug: 'باندل-موس-و-موس-پد-و-هدست-ریزر-razer-battle-bundle',
						available: true,
						categoryId: 51,
						categoryName: 'هدفون',
						minPrice: 69800000,
						maxPrice: 69800000,
						imageUrl:
							'https://dragon-shop.ir/wp-content/uploads/2023/08/خرید-باندل-موس-و-موس-پد-و-هدست-ریزر-Razer-Battle-Bundle-4.jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'دراگون شاپ',
						merchantId: 44855
					},
					{
						id: 'JrnQ84kBd7CINZ3kvIji',
						name: 'مانیتور ایسوس 34 اینچ Monitor Asus TUF Gaming VG34VQL1B',
						slug: 'مانیتور-ایسوس-34-اینچ-monitor-asus-tuf-gaming-vg34vql1b',
						available: true,
						categoryId: 47,
						categoryName: 'کالای دیجیتال',
						minPrice: 283000000,
						maxPrice: 283000000,
						imageUrl:
							'https://dragon-shop.ir/wp-content/uploads/2023/08/خرید-مانیتور-ایسوس-34-اینچ-Monitor-Asus-TUF-Gaming-VG34VQL1B-6.jpg',
						azkivam: false,
						hidden: false,
						merchantName: 'دراگون شاپ',
						merchantId: 44855
					}
				],
				totalItems: 60
			})
		}
	)
}
