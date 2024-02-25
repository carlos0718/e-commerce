import { sideBar } from "./sidebar.js";

export function navBar() {
	const $ = document;

	//create input search
	const inputearch = $.createElement("input");
	inputearch.className = "form-control me-2";
	inputearch.type = "search";
	inputearch.placeholder = "Search";
	inputearch.setAttribute("aria-label", "Search");

	//create div container
	const divContainer = $.createElement("div");
	divContainer.className = "container-fluid";
	divContainer.innerHTML = "<a class='navbar-brand'>L O G O</a>";
	/* divContainer.innerHTML +=
		"<img src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=' alt='cart' width='30' height='24'>";
 */
	const btnCart = $.createElement("button");
	btnCart.type = "button";
	btnCart.setAttribute("data-bs-toggle", "offcanvas");
	btnCart.setAttribute("data-bs-target", "#offcanvasRight");
	btnCart.setAttribute("aria-controls", "offcanvasRight");
	btnCart.className = "btn btn-outline-primary";
	btnCart.innerHTML = "<i class='bi bi-cart3'></i>";

	divContainer.appendChild(btnCart);

	btnCart.onclick = sideBar();

	$.querySelector("#nav-bar").appendChild(divContainer);
}
