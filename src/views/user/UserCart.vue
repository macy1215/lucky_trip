<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-10 col-12">
        <div class="position-relative m-4 px-5">
          <div class="progress" style="height: 1px">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <button
            type="button"
            class="position-absolute top-0 start-0 ms-3 translate-middle
            btn btn-sm btn-primary rounded-pill text-white"
            style="width: 2rem; height: 2rem"
          >
            1
          </button>
          <button
            type="button"
            class="position-absolute top-0 start-50 translate-middle
            btn btn-sm btn-secondary rounded-pill"
            style="width: 2rem; height: 2rem; cursor: default"
          >
            2
          </button>
          <button
            type="button"
            class="position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill"
            style="width: 2rem; height: 2rem; left: 99%; cursor: default"
          >
            3
          </button>
        </div>
        <div class="row text-primary">
          <div class="col text-start">確認商品</div>
          <div class="col">確認購買資訊</div>
          <div class="col text-end">付款確認</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-5 px-md-5 px-2">
    <div :class="{ fullH: Object.keys(carts).length < 1 }">
      <h2 class="text-center text-primary fs-3 fw-bold pb-2 py-4">
        購物車列表
      </h2>
      <div class="d-md-block d-none">
        <table class="table">
          <thead class="border">
            <tr>
              <th scope="col">品名</th>
              <th scope="col">數量/單位</th>
              <th scope="col" class="text-center">單價</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody class="border mx-auto align-middle">
            <tr v-if="total !== 0">
              <template v-for="cart in carts" :key="cart.id">
                <th>
                  <div class="row align-items-center">
                    <div class="col-md-3 col-6">
                      <img
                        :src="cart.product.imageUrl"
                        class="img-fluid rounded object-fit-cover"
                        :alt="product.title"
                      />
                    </div>
                    <h4 class="col-md-9 col-6 my-0 py-0 text-start ps-4">
                      {{ cart.product.title }}
                    </h4>
                  </div>
                </th>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <button
                        typr="button"
                        class="btn btn-outline-primary"
                        :disabled="cart.qty === 1"
                        @click="
                          cart.qty--;
                          changeCartQty(cart, cart.qty);
                        "
                        v-if="cart.qty > 1"
                      >
                        -
                      </button>
                      <button
                        typr="button"
                        class="btn btn-outline-danger"
                        v-else
                        @click="removeCartItem(cart.id)"
                      >
                        <i class="bi bi-trash3"></i>
                      </button>

                      <input
                        min="1"
                        typr="number"
                        class="form-control text-center"
                        v-model="cart.qty"
                        :disabled="cart.id === status.cartQtyLoading"
                        readonly
                      />

                      <button
                        typr="button"
                        class="btn btn-outline-primary"
                        @click="
                          cart.qty++;
                          changeCartQty(cart, cart.qty);
                        "
                      >
                        +
                      </button>

                      <span class="input-group-text" id="basic-addon2">{{
                        cart.product.unit
                      }}</span>
                    </div>
                  </div>
                </td>
                <td>NT {{ cart.total }} 元</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-sm btn-link"
                    @click="removeCartItem(cart.id)"
                    :disabled="cart.id === status.cartQtyLoading"
                  >
                    <!-- <i class="fas fa-spinner fa-pulse"
                      v-if="cart.id === status.showCartLoading">
                      </i> v-if="cart.id === status.showCartLoading"-->
                    <i class="bi bi-x-lg text-danger fs-5"></i>
                  </button>
                </td>
              </template>
            </tr>

            <tr v-else>
              <td class="py-4 mx-auto" colspan="4">
                <p class="h4">購物車目前沒有品項</p>
                <RouterLink :to="`/products`" class="text-decoration-none">
                  <div class="btnProduct">
                    來去找行程
                    <i class="bi bi-chevron-double-right"></i>
                  </div>
                </RouterLink>
              </td>
            </tr>
          </tbody>
          <tfoot class="border">
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end fs-5">{{ final_total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="d-md-none d-block">
        <div class="bg-light px-4 py-2">
          <h4 class="fw-bold fs-3 my-3">
            <i class="bi bi-list-ol pe-2"></i>購物車明細
          </h4>
          <template v-if="total !== 0">
            <template v-for="cart in carts" :key="cart.id">
              <div class="row align-items-center justify-content-center mb-2">
                <div class="col-12">
                  <img
                    :src="cart.product.imageUrl"
                    class="img-fluid rounded object-fit-cover"
                    :alt="product.title"
                  />
                </div>
                <div class="col-12 my-0 py-0 text-start">
                  <h4 class="my-2 pb-1">{{ cart.product.title }}</h4>
                  <div>
                    <div class="input-group input-group-sm mb-3 w-50">
                      <button
                        typr="button"
                        class="btn btn-outline-primary"
                        :disabled="cart.qty === 1"
                        @click="
                          cart.qty--;
                          changeCartQty(cart, cart.qty);
                        "
                        v-if="cart.qty > 1"
                      >
                        -
                      </button>
                      <button
                        typr="button"
                        class="btn btn-outline-danger"
                        v-else
                        @click="removeCartItem(cart.id)"
                      >
                        <i class="bi bi-trash3"></i>
                      </button>

                      <input
                        min="1"
                        typr="number"
                        class="form-control text-center w-25"
                        v-model="cart.qty"
                        :disabled="cart.id === status.cartQtyLoading"
                        readonly
                      />

                      <button
                        typr="button"
                        class="btn btn-outline-primary"
                        @click="
                          cart.qty++;
                          changeCartQty(cart, cart.qty);
                        "
                      >
                        +
                      </button>

                      <span class="input-group-text" id="basic-addon2">{{
                        cart.product.unit
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
          <template v-else>
            <div class="h4 py-4">
              <p>購物車目前沒有品項</p>
              <RouterLink :to="`/products`" class="text-decoration-none">
                <div class="btnProduct">
                  來去找行程
                  <i class="bi bi-chevron-double-right"></i>
                </div>
              </RouterLink>
            </div>
          </template>
          <div class="text-end d-md-none d-block mb-3">
            <button
              class="btn btn-outline-danger"
              type="button"
              :disabled="carts.length === 0"
              @click="removeAllCart(carts)"
            >
              <i class="bi bi-trash3-fill"></i>一鍵清空購物車
            </button>
          </div>
        </div>
        <div class="border border-1 px-2 py-2 my-3 table-responsive">
          <h4 class="fw-bold"><i class="bi bi-vector-pen pe-2"></i>訂單摘要</h4>
          <table class="table align-middle d-md-none d-block table-borderless">
            <thead>
              <tr>
                <th scope="col">品名</th>
                <th scope="col">數量</th>
                <th scope="col" class="w-25">單價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="total !== 0">
                <template v-for="cart in carts" :key="cart.id">
                  <tr>
                    <td class="col-6 my-0 text-start align-top">
                      {{ cart.product.title }}
                    </td>
                    <td class="col-2 align-top">{{ cart.qty }}/人</td>
                    <td class="col-4 align-top text-end">
                      NT {{ cart.final_total }} 元
                    </td>
                  </tr>
                </template>
              </tr>
              <tr v-else>
                <td colspan="3">
                  <p>購物車目前沒有品項</p>
                </td>
              </tr>
            </tbody>
            <hr class="border border-1" />
            <div>
              <div class="align-text-bottom w-100 text-end">
                <span class="text-end align-bottom" colspan="2">總計</span>
                <span class="text-end fs-5 align-bottom"
                  >NT {{ final_total }} 元</span
                >
              </div>
            </div>
          </table>
        </div>
      </div>
      <div class="text-end d-md-block d-none">
        <button
          class="btn btn-outline-danger mb-md-2 mb-5"
          type="button"
          :disabled="carts.length === 0"
          @click="removeAllCart(carts)"
        >
          <i class="bi bi-trash3-fill"></i>一鍵清空購物車
        </button>
      </div>
      <div>
        <button
          v-if="carts.length === 0"
          class="btn btn-primary text-white"
          type="submit"
          :disabled="carts.length === 0"
        >
          確認結帳
        </button>
        <RouterLink :to="`/form`" v-else>
          <button class="btn btn-primary text-white" type="submit">
            確認結帳
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
  <footer-banner />
</template>

<script>
import FooterBanner from '@/components/FooterBanner.vue';
import { mapActions, mapState } from 'pinia';

import cartStore from '@/stores/cartStore';

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    ...mapActions(cartStore, [
      'addToCart',
      'removeAllCart',
      'removeCartItem',
      'changeCartQty',
    ]),
  },
  computed: {
    ...mapState(cartStore, ['carts', 'status', 'final_total', 'total']),
  },
  components: {
    FooterBanner,
  },
  mounted() {},
};
</script>

<style scoped>
.fullH {
  height: 400px;
}
.btn:hover {
  color: white;
}
@media (max-width: 767px) {
  .fullH {
    height: 70vh;
  }
}
</style>
