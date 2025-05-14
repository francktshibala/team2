import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

// This function loads the product listing
function loadProductListing() {
  // Get the HTML element where we'll render the product list
  const productListElement = document.querySelector(".product-list");
  
  // Only proceed if we're on a page with a product list
  if (productListElement) {
    // Create a data source instance for tents
    const dataSource = new ProductData('tents');
    
    // Create a product list instance
    const productList = new ProductList('tents', dataSource, productListElement);
    
    // Initialize the product list - this loads and renders the data
    productList.init();
  }
}

// Call this function when the page loads
loadProductListing();

// Keep any other existing functionality in main.js...