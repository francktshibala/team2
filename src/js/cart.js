import { getLocalStorage } from "./utils.mjs";
import CartCount from "./CartCount.mjs";

console.log("Cart.js loaded");

// Initialize cart count display
const cartCount = new CartCount(document.querySelector(".cart"));
cartCount.render();

function renderCartContents() {
  console.log("Rendering cart contents");
  
  try {
    // Get cart items from localStorage or initialize empty array
    const cartItems = getLocalStorage("so-cart") || [];
    console.log("Cart items retrieved:", cartItems);
    
    // Check if cart has items
    if (cartItems && Array.isArray(cartItems) && cartItems.length > 0) {
      console.log(`Found ${cartItems.length} items in cart`);
      
      // Map each item to HTML
      const htmlItems = cartItems.map((item) => {
        if (!item) return "";
        return cartItemTemplate(item);
      }).filter(item => item !== ""); // Remove any empty strings
      
      // Update DOM with cart items
      document.querySelector(".product-list").innerHTML = htmlItems.join("");
      console.log("Cart rendered to DOM");
    } else {
      // Cart is empty
      console.log("Cart is empty");
      document.querySelector(".product-list").innerHTML = 
        "<li class='cart-card divider'><h2>Your cart is empty</h2><p>Add some products to see them here.</p></li>";
    }
  } catch (error) {
    console.error("Error rendering cart:", error);
    document.querySelector(".product-list").innerHTML = 
      "<li class='cart-card divider'><h2>Error loading cart</h2><p>There was a problem loading your cart. Please try again.</p></li>";
  }
}

function cartItemTemplate(item) {
  // Check if item has all required properties
  if (!item || !item.Image || !item.Name || !item.Colors || !item.Colors[0] || !item.FinalPrice) {
    console.warn("Invalid item in cart:", item);
    return "";
  }
  
  console.log("Creating template for:", item.Name);
  
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

// Call function to render cart
renderCartContents();