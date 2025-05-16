import { getLocalStorage } from "./utils.mjs";

export function cartCountTemplate() {
    return `<span class="cart-count">0</span>`
}

export function updateCartCount() {
    const cartItems = getLocalStorage("so-cart");
    const count = cartItems.length;
    const countElement = document.querySelector(".cart-count");
    
    if (!countElement) {
        return;
    }
    
    countElement.textContent = count;
}