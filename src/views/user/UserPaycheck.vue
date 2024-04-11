<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-10">
        <div class="position-relative m-4 px-3">
          <div class="progress" style="height: 1px">
            <div
              class="progress-bar w-100"
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
            style="width: 2rem; height: 2rem; cursor: default"
          >
            1
          </button>
          <button
            type="button"
            class="position-absolute top-0 start-50 translate-middle
            btn btn-sm btn-primary rounded-pill text-white"
            style="width: 2rem; height: 2rem; cursor: default"
          >
            2
          </button>
          <button
            type="button"
            class="position-absolute top-0 translate-middle
            btn btn-sm btn-primary rounded-pill text-white"
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
  <div class="container h-100 my-5">
    <div class="row justify-content-center">
      <h2 class="fs-4 text-start col-lg-10 col-12">收件者資訊</h2>
      <div class="col-lg-6 text-start">
        <div class="border border-1 rounded-1">
          <div class="border-bottom text-start px-3 pt-4">
            <ul class="lh-lg list-unstyled">
              <li>聯絡大名：{{ user.name }}</li>
              <li>Email:{{ user.email }}</li>
              <li>手機電話：{{ user.tel }}</li>
            </ul>
          </div>
          <div class="border-bottom text-start px-3 py-4">
            地址 {{ user.address }}
          </div>
          <div class="text-start px-3 py-4">
            備註 <span>{{ message }}</span>
          </div>
        </div>
      </div>
      <div class="col-lg-4 px-md-1 pt-md-0 pt-4">
        <div
          class="bg-secondary bg-opacity-10 rounded-2 px-md-2 pb-md-4 pt-md-3 h-auto pt-3"
        >
          <h3 class="my-lg-2 mt-2 mb-3">
            <i class="bi bi-list-ol pe-2"></i>購買清單
          </h3>
          <div v-for="item in order" :key="item.id">
            <div class="d-flex row mb-3 align-items-center px-4">
              <div class="col-md-3 col-6 px-md-0">
                <img
                  :src="item.product.imageUrl"
                  alt=""
                  class="img-fluid rounded rounded-1"
                />
              </div>
              <!-- PC -->
              <div class="col-md-6 b-md-block d-none">
                <div class="text-start">
                  {{ item.product.title }} x {{ item.qty }}/{{
                    item.product.unit
                  }}
                </div>
                <div class="col-md-3 col-2 text-end">
                  NT${{ item.final_total }}元
                </div>
              </div>
              <!-- mobil -->
              <div class="col-6 b-md-none d-block text-start">
                <div class="mb-3">
                  {{ item.product.title }} x {{ item.qty }}/{{
                    item.product.unit
                  }}
                </div>
                <div>NT${{ item.final_total }}元</div>
              </div>
            </div>
          </div>
          <hr />
          <div
            class="fs-3 text-end fw-bold d-flex justify-content-between px-lg-0 px-4 pb-lg-0 pb-4"
          >
            <span>總計</span>
            <span>NT${{ final_total }}元</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-start mx-auto">
      <div class="col-lg-10 col-12 mx-auto d-inline-flex p-0">
        <button
          class="btn btn-primary mt-3 mb-lg-0 mb-5"
          @click="submitPayment"
        >
          <span class="text-white">確定付款</span>
        </button>
      </div>
    </div>
  </div>

  <footer-banner />
</template>

<script>
import FooterBanner from '@/components/FooterBanner.vue';

import Swal from 'sweetalert2';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      order: {},
      user: {},
      message: [],
      orderId: '',
      final_total: '',
    };
  },
  components: {
    FooterBanner,
  },
  methods: {
    getOrder() {
      const { id } = this.$route.params;
      const url = `${VITE_URL}/api/${VITE_NAME}/order/${id}`;

      this.$http
        .get(url)
        .then((res) => {
          // console.log('取得final', res.data.order);
          this.order = res.data.order.products;
          this.user = res.data.order.user;
          this.message = res.data.order.message;
          this.final_total = res.data.order.total;
          this.orderId = this.$route.params;
          // console.log('取得Order id 資料', this.message);
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
    submitPayment() {
      Swal.fire({
        title: '確定付款嗎？',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#2e949c',
        cancelButtonColor: '#ADADAD',
        confirmButtonText: '付款',
        cancelButtonText: '先不要',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          const { id } = this.$route.params;
          const url = `${VITE_URL}/api/${VITE_NAME}/pay/${id}`;
          this.$http
            .post(url)
            .then((res) => {
              this.getOrder();
              Swal.fire({
                title: res.data.message,
                icon: 'success',
                timer: 1500,
              });
              this.$router.push({
                name: '付款完成頁面',
                params: { orderId: this.orderId },
              });
            })
            .catch((err) => {
              Swal.fire({
                icon: 'error',
                title: err.data.message,
              });
            });
        }
      });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
