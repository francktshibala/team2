import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // Get the existing cart, or create an empty array if none exists
  let cart = getLocalStorage("so-cart");

  // If cart doesn't exist or isn't an array, initialize it as an empty array
  if (!cart || !Array.isArray(cart)) {
    cart = [];
  }

  // Add the new product to the cart array
  cart.push(product);

  // Save the updated cart back to localStorage
  setLocalStorage("so-cart", cart);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
// trying the branch rule