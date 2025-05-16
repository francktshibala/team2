import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { cartCountTemplate, updateCartCount } from "./CartContents.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);
productList.init();

const cartIcon = document.querySelector(".cart")
const cartCount = cartCountTemplate()

cartIcon.insertAdjacentHTML("afterbegin", cartCount)
updateCartCount()
