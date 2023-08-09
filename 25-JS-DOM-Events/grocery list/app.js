const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const product = form.elements.product;
  const quantity = form.elements.qty;
  addList(product.value, quantity.value);
  product.value = "";
  quantity.value = "";
});

const addList = (product, quantity) => {
  const list = document.querySelector("#list");
  const item = document.createElement("li");
  // item.innerText = `${quantity} ${product}`;
  // list.appendChild(item);
  item.append(`${quantity} ${product}`);
  list.append(item);
};
