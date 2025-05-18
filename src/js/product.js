import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import CartCount from "./CartCount.mjs";
import { setupDebugLogging } from "./debug.js";

// Set up debug logging for Netlify
setupDebugLogging();

console.log("Product.js loaded");

try {
  // Get the product ID from URL parameter
  const productID = getParam("product");
  console.log("Product ID from URL:", productID);
  
  if (!productID) {
    console.error("No product ID found in URL");
    document.querySelector('.product-detail').innerHTML = 
      "<h2>Product Not Found</h2><p>Please return to the home page and try again.</p>";
  } else {
    // Initialize product data source and details
    const dataSource = new ProductData("tents");
    const product = new ProductDetails(productID, dataSource);
    
    // Initialize product details
    product.init()
      .then(() => console.log("Product details initialized"))
      .catch(err => console.error("Error initializing product details:", err));
  }
  
  // Initialize cart count display
  const cartElement = document.querySelector(".cart");
  if (cartElement) {
    const cartCount = new CartCount(cartElement);
    cartCount.render();
    console.log("Cart count rendered");
  } else {
    console.warn("Cart element not found");
  }
  
} catch (error) {
  console.error("Error in product.js:", error);
}