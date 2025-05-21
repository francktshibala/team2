import { loadHeaderFooter } from "./utils.mjs";
import CartCount from "./CartCount.mjs";

// 1. Load the header and footer
loadHeaderFooter();

// 2. Wait for them to finish loading
document.addEventListener("headerfooterloaded", () => {
  // 3. Set up the cart count
  const cartCount = new CartCount(document.querySelector(".cart"));
  cartCount.render();
});