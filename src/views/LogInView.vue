<template>
    <div class="container">
        <div class="row  justify-content-center position-absolute top-50 start-50 translate-middle">
        <h2 class="brandImg justify-content-cente mx-auto mb-4">
            <a>lucky-trip</a>
        </h2>
        <h1 class="h3 mb-3 font-weight-normal text-primary">
            管理者登入頁面
        </h1>
            <div class="col-8">
                <form id="form" class="form-signin">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="usernameInput"
                        placeholder="name@example.com" required autofocus
                        v-model.lazy="user.username">
                        <label for="usernameInput">Email address</label>
                    </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="passwordInput"
                    placeholder="Password" required
                    v-model.lazy="user.password">
                    <label for="passwordInput">Password</label>
                </div>
                <button class="btn btn-lg btn-primary w-100 mt-3"
                type="button" id="loginBtn" @click="login">
                    登入
                </button>
                </form>
            </div>
            <p class="mt-5 mb-3 text-muted">
             &copy; 2024~∞ - 六角學院
            </p>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/helper/_main.scss';
</style>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  mounted() {
  },
  methods: {
    login() {
      const url = `${VITE_URL}/admin/signin`;
      axios.post(url, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `luckyTrip=${token}; expires=${expired}`;
          this.$router.push('/admin/products');
        })
        .catch(() => {
          alert('登入失敗');
          this.$router.push('/login');
        });
    },
  },
};
</script>
