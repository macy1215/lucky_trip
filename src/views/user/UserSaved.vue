<template>
  <div
    class="container mt-4"
    :class="{ fullH: Object.keys(saveProductList).length < 2 }"
  >
    <h3 class="fw-bold text-start text-black-50 h3">我的收藏</h3>
    <div v-if="saveProductList.length !== 0">
      <div class="row">
        <div
          v-for="savedProduct in saveProductList"
          :key="savedProduct.product.id"
          class="col-lg-4 col-md-6 mt-3 position-relative"
        >
          <div class="card mb-4">
            <div class="overflow-hidden productImg">
              <RouterLink
                :to="`/product/${savedProduct.product.id}`"
                class="d-block h-100"
              >
                <img
                  :src="savedProduct.product.imageUrl"
                  class="card-img-top object-fit-cover"
                  :alt="savedProduct.product.title"
                  style="height: 100%"
                />
              </RouterLink>
            </div>
            <div class="d-flex saveBox position-absolute">
              <!-- prevent -->
              <div
                @click="addToSave(savedProduct.product)"
                class="rounded-circle btn btn-light pb-1"
              >
                <i
                  v-if="!isProductSaved(savedProduct.product.id)"
                  class="bi bi-heart fs-4 icon"
                  :class="{ 'text-primary': isHover }"
                  @mouseover="isHover = true"
                  @mouseleave="isHover = false"
                ></i>
                <i v-else class="bi bi-heart-fill fs-4 icon"></i>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title text-start">
                {{ savedProduct.product.title }}
              </h5>
              <div
                class="row text-start justify-content-between align-items-center"
              >
                <div class="col-lg-7 col-md-12 col-6">
                  售價
                  <span class="text-decoration-line-through text-black-50 fs-6">
                    NT {{ savedProduct.product.origin_price }} 元
                  </span>
                  <div class="text-primary h5 d-sm-inline-block">
                    NT {{ savedProduct.product.price }} 元
                  </div>
                </div>
                <div
                  class="col-lg-5 col-md-12 col-6 text-lg-end
                  text-md-start text-end pt-lg-0 pt-md-3 pt-0"
                  @click.prevent="addToCart(savedProduct.product.id, qty)"
                >
                  <button class="btn btn-primary text-white" type="submit">
                    加入購物車
                  </button>
                  <!-- <i v-if="!carts.find(carts => carts.product_id !== product.id)"
                      class="bi bi-cart-plus fs-4 text-white me-3"></i>
                    <i v-else class="bi bi-cart-plus-fill text-white  fs-4 me-3"></i> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="text-primary fw-bold h5 col-12 h-50 d-flex
      flex-column justify-content-center align-items-center"
    >
      <div class="pb-3">目前沒有收藏唷！</div>
      <RouterLink :to="`/products`">
        <button class="btn btn-primary text-white fw-bold" type="submit">
          點我看行程
          <i class="bi bi-chevron-double-right"></i>
        </button>
      </RouterLink>
    </div>
  </div>
  <footer-banner />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import FooterBanner from '@/components/FooterBanner.vue';
import saveStore from '@/stores/saveStore';
import cartStore from '@/stores/cartStore';

export default {
  data() {
    return {
      isHover: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(saveStore, ['addToSave']),
  },
  computed: {
    ...mapState(saveStore, ['saveIdlist', 'saveProductList', 'isProductSaved']),
  },
  components: {
    FooterBanner,
  },
};
</script>

<style scoped>
.productImg {
  height: 250px;
}
.saveBox {
  bottom: 105px;
  left: 10px;
}
.icon {
  transition:
    transform 0.1s ease,
    color 0.1s ease; /* 添加颜色过渡效果 */
}
.icon:hover {
  text-transform: scale(1.2); /* 指定放大倍数，这里为1.2倍 */
  color: rgb(192, 0, 0) ck;
}
.btn {
  transition: transform 0.1s ease;
}
.btn:hover {
  transform: scale(1.2);
}
@keyframes swing {
  15% {
    transform: translateY(5px) rotate(1deg);
  }
  30% {
    transform: translateY(-5px) rotate(-1deg);
  }
  45% {
    transform: translateY(2px) rotate(1deg);
  }
  60% {
    transform: translateY(-2px) rotate(-1deg);
  }
  100% {
    transform: translateY(0px);
  }
}
.fullH {
  height: 60vh;
}
@media (max-width: 1200px) {
  .productImg {
    height: 200px;
  }
  .saveBox {
    bottom: 125px;
    left: 4px;
  }
}
@media (max-width: 999px) {
  .saveBox {
    bottom: 140px;
    left: 4px;
  }
}
@media (max-width: 767px) {
  .fullH {
    height: 55vh;
  }
  .productAllbg {
    height: 200px;
  }
  .productBox {
    height: 20vh;
  }
  .saveBox {
    bottom: 100px;
    left: 4px;
  }
}
</style>
