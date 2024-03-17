<template>
  <nav class="navbar navbar-expand-md container">
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
                    <RouterLink class="nav-link text-primary active  fw-bold" aria-current="page"
                    to="/products" >好嗨遊行程</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary active fw-bold" aria-current="page"
                    to="/about" >關於我們</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary  fw-bold" aria-current="page"
                    to="/qalist" >常見QA</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary fw-bold" aria-current="page"
                    to="/saved" >
                     我的收藏
                  </RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary  fw-bold" aria-current="page"
                    to="/carts" >
                    <i class="bi bi-cart-fill fw-bolder"></i>
                    <span v-show="isNavbarOpen" class=" fw-bold">購物車</span>
                  </RouterLink>
                  </li>
              </ul>
        </div>
      </div>
    </nav>
    <RouterView></RouterView>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse';

export default {
  data() {
    return {
      headerNavDrop: null,
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
      this.headerNavDrop.toggle();
    },
  },
  watch: {

  },
  mounted() {
    this.headerNavDrop = new Collapse(this.$refs.headerNavDrop, { toggle: false });
  },
};
</script>

<style lang="scss">
@import '../src/assets/scss/helper/_main.scss';
</style>
