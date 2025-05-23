import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import CartCount from "./CartCount.mjs";

// 1. Load the header and footer
loadHeaderFooter();

// 2. Wait for them to finish loading
document.addEventListener("headerfooterloaded", () => {
  // 3. Set up the cart count
  const cartCount = new CartCount(document.querySelector(".cart"));
  cartCount.render();
});

// 4. The rest of the product details code stays the same
const dataSource = new ProductData();
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
product.init();
