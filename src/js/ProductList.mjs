dynamic-product-list
// src/js/ProductList.mjs
// Purpose: Generate a list of product cards in HTML from an array

import { renderListWithTemplate } from './utils.mjs';

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We need these passed in parameters
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // Get the data from our source
    const list = await this.dataSource.getData();
    
    // For now, filter the list to only include the tents we have detail pages for
    // This is temporary until all product detail pages are created
    const filteredList = this.filterProductList(list);
    
    // Render the filtered list with our template
    this.renderList(filteredList);
  }

  filterProductList(list) {
    // We currently have detail pages for the following products (tent IDs)
    const validProductIds = [
      "880RR", // Marmot Ajax 3-Person
      "985RF", // North Face Talus 4-Person
      "989CG", // North Face Talus 3-Person
      "880RT", // Marmot Ajax 2-Person
      "344YJ"  // Cedar Ridge Rimrock 2-Person
    ];

    // Filter the list to only include products with valid IDs
    return list.filter(product => validProductIds.includes(product.Id));
  }

  renderList(list) {
    // Use the utility function to render the list with the template
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
      <img src="${product.Image}" alt="${product.Name}">
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
  </li>`;

import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/?product=${product.Id}">
        <img src="${product.Image}" alt="Image of ${product.Name}" class="product-card__image">
        <h2 class="card__brand"><${product.Brand.Name}/h2>
        <h3 class="card__name">${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>`
  }

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData()
        this.renderList(list);
    }

    renderList(list) {
        // const htmlStrings = list.map(productCardTemplate);
        // this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));

        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
 main
}