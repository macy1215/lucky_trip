<template>
    <nav class="navbar navbar-expand-lg mb-3 container">
      <div class="container-fluid">
            <RouterLink to="/" >
                <span class="nav-link logostyle">
                    <a>lucky-trip</a>
                </span>
            </RouterLink>
        <div class="collapse navbar-collapse justify-content-end" id="nav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary active" aria-current="page"
                    to="/admin/products" >方案列表</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary" aria-current="page"
                    to="/admin/orders" >訂單列表</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary" aria-current="page"
                    to="/admin/blogs" >文章列表</RouterLink>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link text-primary" aria-current="page"
                    @click.prevent="signout()">登出</a>
                  </li>
              </ul>
        </div>
      </div>
    </nav>
    <RouterView></RouterView>
</template>

<style lang="scss">
@import '../src/assets/scss/helper/_main.scss';
</style>

<script>

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)luckyTrip\s*=\s*([^;]*).*$)|^.*$/, '$1');
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
      // eslint-disable-next-line no-alert
      alert('登出帳號，token 已清除');
      this.$router.push('/login');
    },
  },
  mounted() {
    this.checkLogin();
  },
};

</script>
