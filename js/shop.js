import Cart from "../model/Cart.js";
import Products from "../model/product.js";
import { fetchData } from "../utils/HTTPreq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

const render = async () => {
  const productsData = await fetchData();
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );

  productInstance.showProducts();
};

export { cartListNode };
document.addEventListener("DOMContentLoaded", render);
