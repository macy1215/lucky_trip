<template>
  <div class="banner"></div>
  <div class="container px-4">
    <div class="row mt-4 pt-4 align-items-center justify-content-center">
      <div class="d-lg-none d-block">
        <!-- 996以下麵包 -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink class="text-decoration-none" :to="`/`"
                >好嗨遊</RouterLink
              >
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
      </div>

      <div class="row justify-content-center p-0">
        <div class="col-lg-6 col-12 align-self-start ps-0 pe-3">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            ref="myCarousel"
          >
            <div class="carousel-indicators">
              <button
                v-for="(item, index) in detail.allImage"
                :key="index"
                type="button"
                data-bs-target="#carouselExampleFade"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                aria-current="true"
                :aria-label="'Slide ' + (index + 1)"
              ></button>
            </div>
            <div class="carousel-inner">
              <div
                class="carousel-item active"
                v-for="img in detail.allImage"
                :key="img"
              >
                <div class="overflow-hidden w-100 img-fluid">
                  <img :src="img" class="object-fit-cover w-100" />
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div
          class="col-lg-5 col-12 my-md-0 my-md-0 my-4 row p-0
          align-self-stretch d-flex flex-column justify-content-between"
        >
          <div>
            <!-- 電腦版麵包 -->
            <nav aria-label="breadcrumb" class="d-lg-block d-none">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <RouterLink class="text-decoration-none" :to="`/`"
                    >好嗨遊</RouterLink
                  >
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
            <div class="h2 text-start fw-bold mt-4 text-primary">
              {{ product.title }}
            </div>
          </div>
          <!-- 產品重點 -->
          <div>
            <div class="my-lg-5 my-3">
              <ul class="text-start list-unstyled lh-lg">
                <li>
                  <strong class="text-primary">費用包含 | </strong
                  >{{ product.feeincluded }}
                </li>
                <li>
                  <strong class="text-primary">可成團人數 | </strong
                  >{{ product.minpeople }} 人
                </li>
                <li>
                  <strong class="text-primary">最高報名人數 | </strong
                  >{{ product.regist }} 人
                </li>
                <li>
                  <strong class="text-primary">交通方式 | </strong>
                  <span v-if="product.is_intercitybus === 1"
                    >包車(租賃、遊覽車)</span
                  >
                  <span v-if="product.is_walk === 1">雙腳萬能</span>
                  <span v-if="product.is_publictrans === 1"
                    >大眾交通(火車、公車、捷運等)</span
                  >
                </li>
              </ul>
            </div>
            <div class="row justify-content-start align-self-end mt-auto">
              <div class="col-md-6 col-12 d-lg-block d-inline-block">
                <!-- 原價 -->
                <div
                  class="align-middle text-black-50 text-start"
                  v-if="typeof product.origin_price === 'number'"
                >
                  原價
                  <span class="text-decoration-line-through text-black-50">
                    {{ product.origin_price }} 元
                  </span>
                </div>
                <!--  售價 -->
                <div
                  class="text-start"
                  v-if="typeof product.origin_price === 'number'"
                >
                  <span class="fw-bold me-2">好遊價</span>
                  <span class="fs-3 text-primary fw-bold">
                    {{ product.price }} 元
                  </span>
                </div>
              </div>
              <!--  按鈕 -->
              <div
                class="col-6 text-start align-self-end mt-lg-0 mt-3 mb-lg-0 mb-5"
              >
                <button
                  type="button"
                  @click.prevent="addToCart(product.id)"
                  class="btn btn-primary text-white round-0 px-4 addBtn"
                >
                  加入購物車
                  <i class="bi bi-cart-plus text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-11 col-12 my-4 text-start">
        <h4 class="fs-4 fw-bold pb-2">旅遊行程</h4>
        <div>{{ product.schedule }}</div>
      </div>
      <div class="col-lg-11 col-12 my-4 text-start">
        <h4 class="fs-4 fw-bold pb-2">注意事項</h4>
        <div>餐點：{{ product.content }}</div>
        <ol class="text-primary mt-3 lh-base fw-bold">
          <li>請於下訂付款後1個月內與導遊確認想出遊日期與時間</li>
          <li>*如想客製化行程皆由當日導遊與路況來進行而外調整。</li>
        </ol>
      </div>
      <div class="col-lg-11 col-12 text-start mb-5">
        <h4 class="fs-4 fw-bold pb-2">退費政策</h4>
        <div class="fw-bold text-primary mb-2">*團體與個人皆適用</div>
        <ul class="lh-lg">
          <li>旅遊開始前第31日取消：平台需賠償百分之 10%。</li>
          <li>旅遊開始前第21-30日取消：平台需賠償百分之 20%。</li>
          <li>旅遊開始前第11-20日取消：平台需賠償百分之 30%。</li>
          <li>旅遊開始前第4-10日取消：平台需賠償百分之 50%。</li>
          <li>旅遊開始前第1-3日取消：平台需賠償百分之 70%。</li>
          <li>
            如於出發當天取消訂單、團隊集合逾時、因個人因素私自脫隊、及未通知不參加者恕不退費
          </li>
        </ul>
      </div>
    </div>
  </div>

  <footer-banner />
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel';
import FooterBanner from '@/components/FooterBanner.vue';
import { mapActions } from 'pinia';

import cartStore from '@/stores/cartStore';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      carts: [],
      detail: {},
      myCarousel: '',
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
          this.detail = {
            ...this.product,
            allImage: [this.product.imageUrl, ...this.product.imagesUrl],
          };
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
  },
  watch: {
    '$route.query': {
      handler() {
        this.getProduct();
      },
      deep: true,
    },
  },
  components: {
    FooterBanner,
  },
  mounted() {
    // 存取路由的屬性 $route -> this.$route
    this.getProduct();
    this.myCarousel = new Carousel(this.$refs.myCarousel);
  },
};
</script>

<style scoped>
.banner {
  background-image: url("@/assets/images/product_banner.png");
  background-position: center;
  background-size: cover;
  padding: 160px 0px;
}
.imagesBox {
  height: 420px;
}

.addBtn {
  transition: transform 0.3s ease;
}

.addBtn:hover {
  /* animation: shake 1s ease; */
  transform: scale(1.1);
}

.addBtn:active {
  transform: scale(1);
}
@keyframes shake {
  15% {
    transform: rotate(1deg);
  }
  30% {
    transform: rotate(-1deg);
  }
  45% {
    transform: rotate(1deg);
  }
  60% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@media (max-width: 1200px) {
  .imagesBox {
    height: 35vh;
  }
}
@media (max-width: 992px) {
  .imagesBox {
    height: 50vh;
  }
}

@media (max-width: 767px) {
  .banner {
    padding: 80px 0px;
  }
  .imagesBox {
    height: 28vh;
  }
}
</style>
