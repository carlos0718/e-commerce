export function addToStorage(producto) {
	let prod = JSON.parse(localStorage.getItem("products")) || [];
	producto.count ? (producto.count = producto.count + 1) : (producto.count = 1);
	prod.push(producto);

	localStorage.setItem("products", JSON.stringify(prod));
}
