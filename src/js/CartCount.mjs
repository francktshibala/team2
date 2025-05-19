import { getLocalStorage } from "./utils.mjs";

function cartCountTemplate() {
    return `<span class="cart-count">0</span>`
}

export default class CartCount {
    constructor(container) {
        this.container = container;
        this.countElement = null;
    }

    render() {
        if (!this.container) {
            console.warn('No container element provided');
            return;
        }
        this.container.insertAdjacentHTML('afterbegin', cartCountTemplate());
        this.countElement = this.container.querySelector('.cart-count');
        
        this.updateCount();
    }
    
    updateCount() {
        const cartItems = getLocalStorage('so-cart') || [];
        const count = cartItems.length;

        if (!this.countElement) {;
            return;
        }
        
        this.countElement.textContent = count;
    }

    listenForUpdates(eventName = 'cartUpdated') {
        window.addEventListener(eventName, () => this.updateCount());
    }
}