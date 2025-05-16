
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import CartCount from "./CartCount.mjs";

const dataSource = new ProductData("tents");
const productID = getParam("product");


const cartCount = new CartCount(document.querySelector(".cart"));
cartCount.render();

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);


dynamic-product-list
// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
// trying the branch rule

main
