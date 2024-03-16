<template>
  <h1>This is About page.</h1>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  <div><input type="button" value="手動取得購物車" @click="getMore()">
  <img src="/src/assets/images/loading.gif" width="20" alt="loading" v-if="isLoading" >
  </div>
  <div >
    <ul style="min-height:100px" class="vl-parent"
          ref="formContainer">
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.title }}</h3>
        <img :src="product.imageUrl" width="200" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import axios from 'axios';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  methods: {
    getMore() {
      this.isLoading = true;
      setTimeout(() => {
        axios.get(`${VITE_URL}/api/${VITE_NAME}/products/all`)
          .then((res) => {
            this.products = res.data.products;
            this.isLoading = false;
            Swal.fire({
              title: '載入成功!',
              icon: 'success',
              confirmButtonText: '確定',
            });
          });
      }, 3000);
    },
  },
};
</script>

<style scoped>
</style>
