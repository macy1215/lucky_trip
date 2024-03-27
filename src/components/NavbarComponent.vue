<template>
    <nav class="navbar navbar-expand-md container align-items-center">
      <div class="container-fluid">
            <RouterLink to="/" >
                <span class="nav-link logostyle">
                    <a>lucky-trip</a>
                </span>
            </RouterLink>
            <button
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleNavbar"
            >
            <i class="bi bi-list" style="font-size: 2.5rem;"></i>
            </button>
            <div
            class="collapse navbar-collapse navbar-nav py-10 py-lg-0  justify-content-md-end
            justify-content-sm-center"
            id="navbarSupportedContent"
            ref="headerNavDrop"
            v-show="isNavbarOpen">
              <ul class="navbar-nav">
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary active fw-bold" aria-current="page"
                    to="/about" >關於我們</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary active  fw-bold" aria-current="page"
                    to="/products" >好嗨遊行程</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary  fw-bold" aria-current="page"
                    to="/qalist" >常見問題</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary fw-bold" aria-current="page"
                    to="/saved" >
                     <span>我的收藏</span>
                     <!-- class="position-relative align-top" -->
                     <!-- <span class="position-absolute
                        top-20 start-90 translate-middle
                        badge rounded-pill bg-danger fs-6">{{this.saveProductList?.length}}
                        <span class="visually-hidden">New alerts</span>
                      </span> -->
                  </RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink aria-current="page" to="/carts"
                    class="nav-link cart nav-link fs-4 ms-lg-4 me-1 position-relative" >

                      <i class="bi bi-cart-fill fw-bolder position-relative align-top"></i>
                      <span class="position-absolute
                        top-20 start-100 translate-middle
                        badge rounded-pill bg-danger fs-6">{{this.carts?.length}}
                        <span class="visually-hidden">New alerts</span>
                      </span>

                  </RouterLink>
                  </li>
              </ul>
        </div>
      </div>
  </nav>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse';
import { mapActions, mapState } from 'pinia';

import cartStore from '@/stores/cartStore';
import saveStore from '@/stores/saveStore';

export default {
  data() {
    return {
      headerNavDrop: null,
      isNavbarOpen: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'removeCartItem', 'removeAllCart']),
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
      this.headerNavDrop.toggle();
    },
  },
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(saveStore, ['saveIdlist', 'saveProductList', 'isProductSaved']),
  },
  mounted() {
    this.headerNavDrop = new Collapse(this.$refs.headerNavDrop, { toggle: false });
    this.getCart();
  },
};
</script>
