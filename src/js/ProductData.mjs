import { convertToJson } from './utils.mjs';

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${category}.json`;
  }

  async getData() {
    // Fetch the data from the JSON file
    const response = await fetch(this.path);
    const data = await convertToJson(response);
    
    // For tents.json, it's a direct array
    // For other JSONs like backpacks and sleeping-bags, the data is in a Result property
    return Array.isArray(data) ? data : data.Result;
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}