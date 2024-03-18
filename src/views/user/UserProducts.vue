<template>
  <VueLoading v-model:active="isLoading"
              loader="bars" :is-full-page="fullpage"/>
  <div class="productBox">
    <div class="productAllbg"></div>
  </div>

  <div class="container">
    <div class="position-relative w-75 mx-auto">
      <div class="bg-white shadow position-relative border-0 rounded-3 py-5 justify-content-start
      text-start"
      style="top: -40px; padding-left:80px; padding-right:80px;">
        <ul class="w-100 d-flex align-items-center justify-content-start">
          <li>
            <span class="fw-bold text-start">主題選擇</span><span class="px-4">|</span>
          </li>
          <li>
            <button type="button" class="btn btn-outline-primary btn-sm me-3 text-start btnHover"
            @click="showCategory('文學探索')">文學探索</button>
          </li>
          <li>
            <button type="button" class="btn btn-outline-primary btn-sm me-3 text-start btnHover"
            @click="showCategory('親子出遊')">親子出遊</button>
          </li>
          <li>
            <button type="button" class="btn btn-outline-primary btn-sm me-3 text-start btnHover"
            @click="showCategory('休閒渡假')">休閒渡假</button>
          </li>
          <li>
            <button type="button" class="btn btn-outline-primary btn-sm me-3 text-start btnHover"
            @click="showCategory('自然景色')">自然景色</button>
          </li>
          <li>
            <button type="button" class="btn btn-outline-primary btn-sm me-3 text-start btnHover"
            @click="showCategory('美食之旅')">美食之旅</button>
          </li>
        </ul>
        <ul class="w-100 d-flex align-items-center justify-content-start"
        style="top: -40px;">
          <li>
            <span class="fw-bold text-start">地區選擇</span><span class="px-4">|</span>
          </li>
          <li>
            <button type="button" class="btn btn-outline-primary btn-sm me-3 text-start btnHover"
            @click="showCategory('文學探索')">北部</button>
          </li>
          <li>
            <button type="button" class="btn btn-outline-primary btn-sm me-3 text-start btnHover"
            @click="showCategory('休閒渡假')">南部</button>
          </li>
          <li>
            <button type="button" class="btn btn-outline-primary btn-sm me-3 text-start btnHover"
            @click="showCategory('自然景色')">東部</button>
          </li>
          <li>
            <button type="button" class="btn btn-outline-primary btn-sm me-3 text-start btnHover"
            @click="showCategory('美食之旅')">美食之旅</button>
          </li>
        </ul>
    </div>
    </div>
  </div>
  <div class="container">
    <div class="row ">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card mb-4">
          <div style="height: 250px;" class="overflow-hidden">
            <img :src=product.imageUrl class="card-img-top img-influid" :alt="product.title">
          </div>
          <div class="position-relative d-flex" style="top: -40px; left:12px">

            <div @click="addToCart()">
              <i v-if="addCart" class="bi bi-cart-plus fs-4 text-white me-3"></i>
              <i v-else class="bi bi-cart-plus-fill text-white  fs-4 me-3"></i>
            </div>

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
              <RouterLink to="/product/:id" >
                <a class="btn btn-primary text-white">
                看看行程<i class="bi bi-chevron-right"></i></a>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <ul class="vl-parent"
          ref="formContainer">
      <li v-for="product in products" :key="product.id">
        <h3>{{ product }}</h3>
        <img :src="product.imageUrl" width="200" alt="">
      </li>
    </ul>
  </div> -->
  <footer-banner></footer-banner>
</template>
<script type="module">
import FooterBanner from '../../components/FooterBanner.vue';
// eslint-disable-next-line import/no-extraneous-dependencies

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      fullpage: true,
      catart: [],
      products: [],
      addCart: true,
      addSave: true,
    };
  },
  methods: {
    getMore() {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_NAME}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
        });
    },
    showCategory() {
      console.log(this.products);
      if (this.products.category === '文學探索') {
        this.products.forEach((item) => {
          this.catart = item;
        });
      }
    },
    addToCart() {
      this.addCart = !this.addCart;
    },
    addToSave() {
      this.addSave = !this.addSave;
    },
  },
  components: {
    FooterBanner,
  },
  mounted() {
    this.getMore();
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
}
</style>
