export function decreaseProduct(id) {
	const productsLocalStorage = JSON.parse(localStorage.getItem("products"));
	const product = productsLocalStorage.find((product) => product.id === id);
	const index = productsLocalStorage.indexOf(product);
	product.count > 1 ? (product.count -= 1) : (product.count = 1);
	productsLocalStorage[index] = product;
	localStorage.setItem("products", JSON.stringify(productsLocalStorage));

	const spanCount = document.querySelector(`#count-product-${id}`);
	spanCount.textContent = product.count;

	const btnDecrease = document.querySelector(`#btn-decrease-${id}`);
	btnDecrease.disabled = product.count === 1;
}
