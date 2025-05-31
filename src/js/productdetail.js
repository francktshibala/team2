// Example product data
const originalPrice = 100;
const discountedPrice = 75;

// Get DOM elements
const priceElement = document.getElementById("price");
const discountFlag = document.getElementById("discount-flag");

// Display prices
priceElement.textContent = `$${discountedPrice.toFixed(2)}`;

// Check for discount
if (originalPrice > discountedPrice) {
  const discountPercent = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );

  discountFlag.textContent = `-${discountPercent}% OFF`;
  discountFlag.style.display = "block";
}
