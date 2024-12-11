export default defineNuxtRouteMiddleware((to, from) => {
	if (!to.path.includes('products')) {
		return navigateTo('/products')
	}
})
