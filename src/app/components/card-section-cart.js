import { increaseProduct } from "../../scripts/increase-product.js";

export function cardSectionCart() {
	let prod = JSON.parse(localStorage.getItem("products"));
	console.log("prod ", prod);
	prod &&
		prod.map((p) => {
			return card(p);
		});
}

function card(p) {
	const $ = document;
	console.log("p ", p);

	//create div container img
	const divImg = $.createElement("div");
	divImg.className = "col-md-4";
	divImg.innerHTML = `<img src='${p.image}' class='img-fluid rounded-start' alt='...'>`;

	// create title
	const title = $.createElement("h5");
	title.className = "card-title";
	title.textContent = p.title;

	//create button add product

	const btnAdd = $.createElement("button");
	btnAdd.type = "button";
	btnAdd.className = "btn btn-primary me-2";
	btnAdd.innerHTML = "<i class='bi bi-cart-plus'></i>";
	btnAdd.onclick = () => increaseProduct(p.id);
	//create span count product
	const spanCount = $.createElement("span");
	spanCount.className = "btn btn-outline-secondary me-2";
	spanCount.id = `count-product-${p.id}`;
	spanCount.textContent = p.count;

	//create btn decrease product
	const btnDecrease = $.createElement("button");
	btnDecrease.type = "button";
	btnDecrease.className = "btn btn-primary me-2";
	btnDecrease.innerHTML = "<i class='bi bi-cart-dash'></i>";
	//create button remove product
	const btnRemove = $.createElement("button");
	btnRemove.type = "button";
	btnRemove.className = "btn btn-danger";
	btnRemove.innerHTML = "<i class='bi bi-trash'></i>";
	//create div container count product
	const divContainerCount = $.createElement("div");
	divContainerCount.className = "d-flex justify-content-center";
	divContainerCount.appendChild(btnDecrease);
	divContainerCount.appendChild(spanCount);
	divContainerCount.appendChild(btnAdd);
	divContainerCount.appendChild(btnRemove);

	//create div body
	const divBody = $.createElement("div");
	divBody.className = "card-body";

	divBody.appendChild(title);
	divBody.appendChild(divContainerCount);

	//create div container body
	const divContainerBody = $.createElement("div");
	divContainerBody.className = "col-md-8";
	divContainerBody.appendChild(divBody);

	//create div card row
	const divCardRow = $.createElement("div");
	divCardRow.className = "row g-0";
	divCardRow.appendChild(divImg);
	divCardRow.appendChild(divContainerBody);

	//create div card container
	const divCardContainer = $.createElement("div");
	divCardContainer.className = "card mb-3";
	divCardContainer.style.maxWidth = "540px";
	divCardContainer.appendChild(divCardRow);

	$.addEventListener("DOMContentLoaded", () => {
		$.querySelector("#add-to-prod").appendChild(divCardContainer);
	});
}
/* <div class='card mb-3' style='max-width: 540px;'>
	<div class='row g-0'>
		<div class='col-md-4'>
			<img src='...' class='img-fluid rounded-start' alt='...' />
		</div>
		<div class='col-md-8'>
			<div class='card-body'>
				<h5 class='card-title'>Card title</h5>
				<p class='card-text'>
					This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
					longer.
				</p>
				<div class='d-flex justify-content-center'>
					<button type='button' class='btn btn-primary me-2'>
						<i class='bi bi-cart-plus'></i>
					</button>
					<span class='btn btn-outline-secondary'>1</span>
					<button type='button' class='btn btn-danger'>
						<i class='bi bi-cart-dash'></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>;
 */
