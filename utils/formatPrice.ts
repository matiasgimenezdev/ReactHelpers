export function formatPrice(price: number): string {
	return price.toLocaleString('es-ar', {
		style: 'currency',
		currency: 'ARS',
		minimumFractionDigits: 0,
	});
}
