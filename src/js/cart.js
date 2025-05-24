import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import CartCount from "./CartCount.mjs";

// 1. Load the header and footer
loadHeaderFooter();

// 2. Wait for them to finish loading
document.addEventListener("headerfooterloaded", () => {
  // 3. Set up the cart count
  const cartCount = new CartCount(document.querySelector(".cart"));
  cartCount.render();
  cartCount.listenForUpdates();

  // 4. Render the cart contents
  renderCartContents();
});

// Function to display cart items
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];

  // Select the product list element

  const productListElement = document.querySelector(".product-list");

  // Check if there are items in the cart
  if (cartItems && cartItems.length > 0) {
    // Create HTML for each item and join them
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    productListElement.innerHTML = htmlItems.join("");
  } else {
    // Show empty cart message
    productListElement.innerHTML = `<li class="cart-empty">Your cart is empty</li>`;
  }
}

// Function to create HTML for one cart item
function cartItemTemplate(item) {
  // Check if the item has all required information
  if (!item || !item.Image || !item.Name || !item.Colors || !item.FinalPrice) {
    console.error("Invalid item in cart:", item);
    return `<li class="cart-card divider">
      <p class="cart-card__error">Invalid item in cart</p>
    </li>`;
  }

  // Create HTML for the item
  const newItem = `<li class="cart-card divider">
  <a href="/product_pages/?product=${item.Id}" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="/product_pages/?product=${item.Id}">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

// Call the render function when the page loads
renderCartContents();
