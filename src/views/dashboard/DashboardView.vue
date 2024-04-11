<template>
  <nav class="navbar navbar-expand-md mb-3 container">
    <div class="container-fluid">
      <RouterLink to="/">
        <span class="nav-link logostyle">
          <a>lucky-trip</a>
        </span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <i class="bi bi-list" style="font-size: 2.5rem"></i>
      </button>
      <div
        class="collapse navbar-collapse navbar-nav ms-auto py-10 py-lg-0"
        id="navbarSupportedContent"
        ref="headerNavDrop"
        v-show="isNavbarOpen"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              class="nav-link text-primary active"
              aria-current="page"
              to="/admin/products"
              >方案列表</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link text-primary"
              aria-current="page"
              to="/admin/orders"
              >訂單列表</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link text-primary"
              aria-current="page"
              to="/admin/coupons"
              >優惠卷列表</RouterLink
            >
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link text-primary"
              aria-current="page"
              @click.prevent="signout()"
              >登出</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView v-if="checkSuccess" />
</template>

<style lang="scss">
@import "../src/assets/scss/helper/_main.scss";
</style>

<script>
import Swal from 'sweetalert2';
import Collapse from 'bootstrap/js/dist/collapse';

export default {
  data() {
    return {
      checkSuccess: false,
      headerNavDrop: null,
      isNavbarOpen: false,
    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)luckyTrip\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const url = `${import.meta.env.VITE_URL}/api/user/check`;
        this.$http
          .post(url, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true;
          })
          .catch(() => {
            this.checkSuccess = false;
            this.$router.push('/login');
          });
      } else {
        // eslint-disable-next-line no-alert
        alert('尚未登入');
        this.$router.push('/login');
      }
    },
    signout() {
      document.cookie = 'luckyTrip=;expires=;';
      Swal.fire({
        icon: 'success',
        title: '成功登出帳號，token 已清除',
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push('/login');
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
      this.headerNavDrop.toggle();
    },
  },
  mounted() {
    this.checkLogin();
    this.headerNavDrop = new Collapse(this.$refs.headerNavDrop, {
      toggle: false,
    });
  },
};
</script>
