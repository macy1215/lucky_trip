<template>
  <footer class="bottom-0">
    <div class="footerbg align-self-end">
      <div class="container">
        <div class="row align-items-center py-3 position-relative">
          <div class="col-md-6 col-12">
            <p
              class="text-wrap footerTitle text-white text-md-start fw-bold pe-5 shadow-sm"
            >
              訂閱獲得最新情報<br />及特別折扣！
            </p>
            <div class="input-group pe-5 pb-5">
              <VeeForm
                ref="form"
                class="col-md-6"
                @submit="sendSubscription"
                v-slot="{ errors }"
              >
                <div class="d-flex">
                  <VeeField
                    id="email"
                    name="email"
                    type="email"
                    class="form-control rounded-start rounded-0"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入email信箱 "
                    ref="emailInput"
                    rules="email|required"
                    v-model="form.email"
                  ></VeeField>
                  <button
                    class="btn btn-primary text-white rounded-end rounded-0 text-nowrap"
                    type="button"
                    id="scributBtn"
                    @click="sendSubscription"
                  >
                    訂閱我們
                  </button>
                </div>
                <error-message
                  name="email"
                  class="invalid-feedback d-block text-start"
                >
                </error-message>
              </VeeForm>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary mb-0">
      <div class="container">
        <div class="row justify-content-between py-4">
          <h5 class="col-md-8 col-12 text-start mb-md-0 pb-3 text-white fs-6">
            © 2024. 版面設計由個人參考網路資源進行二次設計，網站圖片來自於
            Unsplash 上的創作者。此網站為個人作品展示，非商業使用。
          </h5>
          <div class="col-md col-12 text-md-end text-start">
            <RouterLink to="/login">
              <span class="text-white">
                <i class="bi bi-person-circle"></i>
                <a class="ps-2 text-decoration-none text-white">管理員登入</a>
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      products: [],
      form: {
        email: '',
      },
    };
  },
  methods: {
    sendSubscription() {
      Swal.fire({
        title: '訂閱好嗨遊',
        text: '成功送出，感謝您的訂閱',
        icon: 'success',
        confirmButtonText: '確定',
      }).then((result) => {
        if (result.isConfirmed) {
          this.form.email = '';
          this.$refs.form.resetValidation();
        }
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.footerbg {
  background-size: cover;
  background-image: url(@/assets/images/footer-news.png);
  background-repeat: no-repeat;
  background-position: top center;
}
.footerTitle {
  font-size: 1.5em;
  line-height: 1.6em;
}
@media (max-width: 767px) {
  .footerTitle {
    margin-top: 40px;
    font-size: 1.5em;
    line-height: 1.3em;
    text-align: left;
    padding-bottom: 12px;
  }
}
</style>
