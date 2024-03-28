<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div class="container px-md-5 px-2">
    <table class="table align-middle" :class="{ 'fullH': Object.keys(product).length < 3 }">
            <thead class="border">
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 180px">數量/單位</th>
                <th class="text-center">單價</th>
              </tr>
            </thead>
            <tbody class="border">
              <template v-if="total !== 0" v-for="cart in carts" :key="cart.id" >
                <!-- 資料是 carts 狀態的 carts 資料 -->
                <tr>
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(cart.id)" :disabled="cart.id === status.cartQtyLoading" >
                      <i class="fas fa-spinner fa-pulse"
                       v-if="cart.id === status.showCartLoading">
                      </i>
                      x
                    </button>
                  </td>
                  <td class="w-auto align-middle">
                    <div class="row align-items-center">
                      <div class="col-md-2 col-6">
                        <img :src=cart.product.imageUrl
                        class="img-fluid rounded object-fit-cover"
                        :alt="product.title">
                      </div>
                      <h4 class="col-md-6 col-6
                        my-0 py-0 text-start ps-4">
                        {{ cart.product.title }}
                      </h4>
                    </div>
                    <!-- <div class="text-success">
                      已套用優惠券
                    </div> -->
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <div class="input-group mb-3">
                        <button typr="button" class="btn btn-outline-primary"
                        :disabled="cart.qty ===1"
                        @click="cart.qty--;changeCartQty(cart,cart.qty)"
                        v-if="cart.qty >1"
                        > - </button>
                        <button typr="button" class="btn btn-outline-danger"
                        v-else
                        @click="removeCartItem(cart.id)" >
                        <i class="bi bi-trash3"></i>
                        </button>

                        <input min="1" typr="number" class="form-control" v-model="cart.qty"
                        :disabled="cart.id === status.cartQtyLoading" readonly
                        />

                        <button typr="button" class="btn btn-outline-primary"
                        @click="cart.qty++;changeCartQty(cart,cart.qty)"
                        > + </button>

                        <span class="input-group-text"
                        id="basic-addon2">{{ cart.product.unit }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <!-- <small class="text-success">折扣價：</small> -->
                    {{ cart.total }}
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td class="h4 py-4" colspan="4">
                    購物車無商品
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot class="border">
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end fs-5">{{ final_total }}</td>
              </tr>
            </tfoot>
    </table>
    <div class="text-end">
      <button class="btn btn-outline-danger" type="button"
      :disabled="carts.total ===0"
      @click="removeAllCart(carts)">清空購物車</button>
    </div>
    <RouterLink :to="`/form`">
      <button class="btn btn-primary text-white" type="submit">
        確認結帳
      </button>
    </RouterLink>
  </div>
  <footer-banner/>
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
    ...mapActions(cartStore, ['addToCart', 'removeAllCart', 'removeCartItem', 'changeCartQty']),
  },
  computed: {
    ...mapState(cartStore, ['carts', 'status', 'final_total', 'total']),
  },
  components: {
    FooterBanner,
  },
  mounted() {
  },
};
</script>

<style scoped>
.fullH{
  height: 400px;
}
</style>
