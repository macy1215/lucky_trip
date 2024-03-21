<template>
  <VueLoading v-model:active="isLoading"
              loader="bars"
              :can-cancel="false"
              :is-full-page="fullpage"/>
  <div class="productBox">
    <div class="productAllbg"></div>
  </div>

  <div class="container">
    <div class="row py-5">
     <div class="col-md-3 col-12">
      <div class="bg-white shadow border-0 rounded-3 justify-content-start
      text-start py-5 px-4">
        <h3 class="fw-bold text-start">主題選擇</h3>
        <hr>
        <ul class="px-0 d-flex flex-wrap list-unstyled">
          <li>
            <RouterLink :to="`/products`">
              <button type="button"
              class="btn btn-outline-primary btn-sm me-3
              text-start btnHover mb-2
              ">全部行程</button>
            </RouterLink>
          </li>
          <li class="list-group-item"
            v-for="item in categories" :key="item">
            <RouterLink :to="`/products?category=${item}`">
            <button type="button"
            class="btn btn-outline-primary
            btn-sm me-3 text-start
            btnHover mb-2"
            >{{ item }}</button>
            </RouterLink>
          </li>
        </ul>
      </div>
     </div>
     <div class="col-md-9 col-12">
      <div class="row">
        <div class="col-md-6 d-flex" v-for="product in products" :key="product.id">
        <div class="card mb-4">
          <div style="height: 250px;" class="overflow-hidden">
            <RouterLink :to="`/product/${product.id}`" >
            <img :src=product.imageUrl class="card-img-top  object-fit-cover"
            :alt="product.title"
            style="width: 105%;"
            >
            </RouterLink>
          </div>
          <div class="position-relative d-flex" style="top: -40px; left:12px">
            <div @click="addToSave()">
              <i v-if="addSave" class="bi bi-heart fs-4 text-white "></i>
              <i v-else class="bi bi-heart-fill fs-4 text-white"></i>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title text-start">{{product.title}}</h5>
            <div class="text-start d-flex justify-content-between align-items-center">
              <div>
                售價
                <span class="text-decoration-line-through text-black-50 fs-6">
                  NT {{ product.origin_price }}
                </span>
                <span class="text-primary h5">NT {{ product.price }}</span>
              </div>
              <div @click.prevent="addToCart(product.id, qty)">
              <button class="btn btn-primary text-white" type="submit">加入購物車</button>
              <!-- <i v-if="!carts.find(carts => carts.product_id !== product.id)"
                class="bi bi-cart-plus fs-4 text-white me-3"></i>
              <i v-else class="bi bi-cart-plus-fill text-white  fs-4 me-3"></i> -->
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Pagination :pagination="pagination" @emit-pages="getProducts"></Pagination>
     </div>
    </div>
  </div>
  <footer-banner></footer-banner>
</template>
<script type="module">
import { mapActions } from 'pinia';
import FooterBanner from '@/components/FooterBanner.vue';
import Pagination from '@/components/PaginationView.vue';

import Swal from 'sweetalert2';

import cartStore from '@/stores/cartStore';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      fullpage: true,
      addSave: true,
      carts: [],
      products: [],
      productId: '',
      categories: ['文化探索', '休閒渡假', '自然景色', '親子出遊', '美食之旅'],
      pagination: {},
    };
  },
  watch: {
    '$route.query': {
      handler() {
        this.getUserProduct();
      },
      deep: true,
    },
  },
  methods: {
    getUserProduct() {
      this.isLoading = true;
      const { category = '' } = this.$route.query;
      const url = `${VITE_URL}/api/${VITE_NAME}/products/?category=${category}`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_NAME}/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
        });
    },
    ...mapActions(cartStore, ['addToCart']),
    addToSave() {
      this.addSave = !this.addSave;
    },
  },
  components: {
    FooterBanner,
    Pagination,
  },
  mounted() {
    this.getUserProduct();
  },
};
</script>

<style scoped>
.productBox{
  height: 460px;
  background: white;
  position: relative;
}
.productAllbg{
    background-image: url("@/assets/images/ban_product_all.jpg");
    height: 100%;
    background-repeat:no-repeat;
    background-position: center;
    background-size:cover;
    background: linear-gradient(45deg, #fff 50%);
}
.productAllbg::after{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 0;
    height: 0;
    border-top: 50px solid rgb(255, 255, 255);
}
.btnHover:hover{
  color: white;
}

@media(max-width: 767px){
  .productAllbg{
    height: 200px;
  }
  .productBox{
  height: 20vh;
}
}
</style>
