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
      axios.get(url).then((res) => {
        this.products = res.data.products;
        this.isLoading = false;
      });
    },
  },
  getters: {
    // 用解構方始將 state中的 product 做取用，所以在 函式中用解構的方式將資料帶入 ({product})
    sortProducts: ({ products }) => products.sort((a, b) => a.price - b.price),
  },
});
