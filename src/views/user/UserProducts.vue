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
      text-start py-md-4 py-3 px-4 my-md-0 mt-2 mb-4">
        <h3 class="fw-bold text-start">主題選擇</h3>
        <hr>
        <ul class="px-0 d-flex flex-wrap my-0 list-unstyled">
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
          <div class="overflow-hidden productImg">
            <RouterLink :to="`/product/${product.id}`" >
            <img :src=product.imageUrl class="card-img-top  object-fit-cover"
            :alt="product.title"
            style="width: 105%;"
            >
            </RouterLink>
          </div>
          <div class="position-relative d-flex saveBox">
            <div @click.prevent="addToSave(product)"
            class="rounded-circle btn btn-outline-light border border-2 pb-1 ">
              <i v-if="!isProductSaved(product.id)"
              class="bi bi-heart fs-4 icon"
              :class="{ 'text-dark': isHover[product.id] }"
                @mouseover="isHover[product.id] = true"
                @mouseleave="isHover[product.id] = false"
              ></i>
              <i v-else class="bi bi-heart-fill fs-4 icon"></i>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title text-start">{{product.title}}</h5>
            <div class="row text-start justify-content-between align-items-center">
              <div class="col-lg-7 col-md-12 col-6">
                售價
                <span class="text-decoration-line-through text-black-50 fs-6">
                      {{ product.origin_price.toLocaleString('zh-TW', {
                          style: 'currency',
                          currency: 'NTD'
                        })
                      }}
                </span>
                <span class="text-primary h5">
                    {{ product.price.toLocaleString('zh-TW', {
                          style: 'currency',
                          currency: 'NTD'
                        })
                    }}</span>
              </div>
              <div class="col-lg-5 col-md-12 col-6 text-lg-end text-md-start text-end
                    pt-lg-0 pt-md-3 pt-0"
                @click.prevent="addToCart(product.id, qty)">
                <button class="btn btn-primary text-white" type="submit">加入購物車</button>
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
  <footer-banner/>
</template>
<script type="module">
import { mapActions, mapState } from 'pinia';
import FooterBanner from '@/components/FooterBanner.vue';
import Pagination from '@/components/PaginationView.vue';

import Swal from 'sweetalert2';

import cartStore from '@/stores/cartStore';
import saveStore from '@/stores/saveStore';

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
      // savelist: [],
      isHover: {},
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
          this.pricethuand = res.data.products;
          this.priceorithouand = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.data.message,
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
            title: err.data.message,
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
        });
    },
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(saveStore, ['addToSave']),
    // addToSave(item) {
    //   console.dir(item);
    //   if (!this.savelist.find((favorite) => favorite.id === item.id)) {
    //     this.savelist.push(item);
    //   }
    // },
  },
  computed: {
    ...mapState(saveStore, ['savelist', 'isProductSaved']),
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
.productImg{
  height: 250px;
}
.saveBox{
  top: -60px;
  left:12px
}
.icon {
  transition: transform 0.1s ease, color 0.1s ease; /* 添加颜色过渡效果 */
}
.icon:hover {
  text-transform: scale(1.2); /* 指定放大倍数，这里为1.2倍 */
  color: black;
}
@media(max-width: 999px){
  .productImg{
  height: auto;
  }
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
