import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import CartCount from "./CartCount.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

const dataSource = new ProductData("tents");
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
product.init();

const cartCount = new CartCount(document.querySelector(".cart"));
cartCount.render();
cartCount.listenForUpdates();

function addProductToCart(product) {
  let cart = getLocalStorage("so-cart") || [];

  // Find if product already in cart
  const existing = cart.find((item) => item.Id === product.Id);

  if (existing) {
    // If exists, increase quantity by 1 (or initialize quantity to 2)
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    // Create a shallow copy of product and add quantity: 1
    const productWithQuantity = { ...product, quantity: 1 };
    cart.push(productWithQuantity);
  }

  setLocalStorage("so-cart", cart);
}
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
