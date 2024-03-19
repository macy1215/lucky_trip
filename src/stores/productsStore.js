/* eslint-disable arrow-body-style */
import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default defineStore('productsStore', {
// state, action, getters
  state: () => ({
    products: [],
    isLoading: false,
  }),
  actions: {
    getProduct() {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_NAME}/products/all`;
      axios.get(url)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
          console.log(this.products);
        });
    },
  },
  getters: {
    sortProducts: ({ products }) => {
      console.log(products);
      return products.sort((a, b) => a.price - b.price);
    },
  },
});
