import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import CartCount from "./CartCount.mjs";
import { setupDebugLogging } from "./debug.js";

// Set up debug logging for Netlify
setupDebugLogging();

console.log("Main.js loaded");

// Initialize product data and list
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");

// Check if we have a product list element
if (element) {
  const productList = new ProductList("Tents", dataSource, element);
  productList.init()
    .then(() => console.log("Product list initialized"))
    .catch(err => console.error("Error initializing product list:", err));
} else {
  console.log("No product list element found on this page");
}

// Initialize cart count
const cartElement = document.querySelector(".cart");
if (cartElement) {
  const cartCount = new CartCount(cartElement);
  cartCount.render();
  console.log("Cart count rendered");
} else {
  console.warn("Cart element not found");
}