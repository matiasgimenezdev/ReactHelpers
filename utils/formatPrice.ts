function formatPrice(price: number, currency: string): string {
	return price.toLocaleString('es-ar', {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 0,
	});
}
