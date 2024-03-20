<template>
  <div class="banner"></div>
  <div class="container">
    <div class="row mt-4 pt-4 align-items-center">
      <div class="col-md-6">
        <img :src=product.imageUrl class="card-img-top  object-fit-cover"
            :alt="product.title">
      </div>

      <div class="col-md-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink class="text-decoration-none" :to="`/`">好嗨遊</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink class="text-decoration-none" :to="`/products`">
                {{ product.category }}
              </RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
        <div class="h2 text-start fw-bold">{{ product.title }}</div>
        <div class="row align-items-center justify-content-between pt-3">
          <div class="col-md-6 align-middle text-black-50 text-start">
           原價
           <span class="text-decoration-line-through text-black-50">
            NT${{ product.origin_price }}
          </span>
          </div>
          <div class="col-md-6 text-start">
            <span class="fw-bold me-2">好遊價</span>
            <span class="fs-3 text-primary fw-bold">NT${{ product.price }}</span>
          </div>
        </div>
        <div class="mt-5">
          <div class="text-start">
            <i class="bi bi-heart"></i>
          </div>
          <ul class="text-start list-unstyled lh-lg">
            <li>費用包含：{{ product.feeincluded }}</li>
            <li>
              可成團人數：{{ product.minpeople }} 人</li>
            <li>最高報名人數：{{ product.regist }} 人</li>
            <li>交通方式
              <span v-if="product.is_intercitybus === 1">包車(租賃、遊覽車)</span>
              <span v-if="product.is_walk === 1">雙腳萬能</span>
              <span v-if="product.is_publictrans === 1">大眾交通(火車、公車、捷運等)</span>
            </li>
          </ul>
        </div>
        <div class="row justify-content-start">
          <div class="col-md-6 text-start">
            <button type="button" class="btn btn-primary text-white round-0">加入購物車
              <i class="bi bi-cart-plus text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-12 my-md-4 text-start">
        <h4 class="fs-4 fw-bold pb-2">旅遊行程</h4>
        <div>{{ product.schedule }}</div>
      </div>
      <div class="col-md-12 my-md-4 text-start">
        <h4 class="fs-4 fw-bold pb-2">注意事項</h4>
        <div>餐點：{{ product.content }}</div>
        <ol class="text-primary mt-3 lh-base fw-bold">
              <li>請於下訂付款後1個月內與導遊確認想出遊日期與時間</li>
              <li>*如想客製化行程皆由當日導遊與路況來進行而外調整。</li>
        </ol>
      </div>
      <div class="col-md-12 my-md-4 text-start">
        <h4 class="fs-4 fw-bold pb-2">退費政策</h4>
        <div class="fw-bold text-primary mb-2">*團體與個人皆適用</div>
        <ul class="lh-lg">
          <li>旅遊開始前第31日取消:平台需賠償百分之10</li>
          <li>旅遊開始前第21-30日取消:平台需賠償百分之20。</li>
          <li>旅遊開始前第11-20日取消:平台需賠償百分之30。</li>
          <li>旅遊開始前第4-10日取消:平台需賠償百分之50。</li>
          <li>旅遊開始前第1-3日取消:平台需賠償百分之70。 </li>
          <li>如於出發當天取消訂單、團隊集合逾時、因個人因素私自脫隊、及未通知不參加者恕不退費</li>
        </ul>
      </div>
    </div>
  </div>

  <footer-banner></footer-banner>
</template>

<script>
import FooterBanner from '@/components/FooterBanner.vue';
import { mapActions } from 'pinia';

import cartStore from '@/stores/cartStore';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      carts: [],
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      const url = `${VITE_URL}/api/${VITE_NAME}/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ...mapActions(cartStore, ['addToCart']),
  },
  watch: {
    '$route.query': {
      handler() {
        this.getUserProduct();
      },
      deep: true,
    },
  },
  components: {
    FooterBanner,
  },
  mounted() {
  // 存取路由的屬性 $route
    // console.log(this.$route);
    this.getProduct();
  },
};

</script>

<style scoped>
.banner{
  background-image: url('@/assets/images/product_banner.png');
  background-position: center;
  background-size: cover;
  padding: 160px 0px;
}
@media (max-width: 767px) {
  .banner{
  padding: 80px 0px;
 }
}
</style>
