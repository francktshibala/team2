import CartCount from "./CartCount.mjs";
import { loadHeaderFooter } from "./utils.mjs";

// 1. Call our function to load the header and footer
loadHeaderFooter();

// 2. Listen for when header/footer are finished loading
// This is like waiting for someone to announce "dinner is ready!" before you go eat
document.addEventListener("headerfooterloaded", () => {
  // 3. Now we can set up the cart count (the number in the cart icon)
  const cartCount = new CartCount(document.querySelector(".cart"));
  cartCount.render();
});