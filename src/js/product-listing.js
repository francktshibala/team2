import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import CartCount from "./CartCount.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

// 1. Call our function to load the header and footer
loadHeaderFooter();

// 2. Listen for when header/footer are finished loading
// This is like waiting for someone to announce "dinner is ready!" before you go eat
document.addEventListener("headerfooterloaded", () => {
  // 3. Now we can set up the cart count (the number in the cart icon)
  const cartCount = new CartCount(document.querySelector(".cart"));
  cartCount.render();
});

// 4. The rest of the code for listing products stays the same
const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");

const productList = new ProductList(category, dataSource, element);
productList.init();
