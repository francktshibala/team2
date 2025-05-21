import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import CartCount from "./CartCount.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);
productList.init();

// const cartCount = new CartCount(document.querySelector(".cart"));
// cartCount.render();
// cartCount.listenForUpdates();
