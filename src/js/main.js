import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import CartCount from "./CartCount.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);
productList.init();

const cartCount = new CartCount(document.querySelector(".cart"));
cartCount.render();
cartCount.listenForUpdates();



function startCountdown() {
    const countdownDate = new Date("June 15, 2025 12:00:00").getTime(); // set your sale date
  
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "🎉 The Sale Has Started!";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = String(days).padStart(2, '0');
      document.getElementById("hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }, 1000);
  }
  
  startCountdown();
