<template>
  <div class="container h-100">
    <div class="row justify-content-center">
      <h2 class="fs-4 text-start col-lg-10 col-12">收件者資訊</h2>
      <div class="col-lg-6 text-start">
        <div class="border border-1 rounded-1">
          <div class="border-bottom text-start px-3 pt-4">
            <ul class="lh-lg  list-unstyled">
              <li>聯絡大名：{{ user.name }}</li>
              <li>Email:{{ user.email }}</li>
              <li>手機電話：{{ user.tel }}</li>
            </ul>
          </div>
          <div class="border-bottom text-start px-3 py-4">
            地址 {{ user.address }}
          </div>
          <div class=" text-start px-3 py-4">
            備註 <span>{{ message }}</span>
          </div>
        </div>
        <!-- <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="true"
              aria-controls="collapseOne">
                聯絡 {{ user.name }} / {{ user.email }} / {{ user.tel }}
              </button>
            </h2>
            <div id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body  text-start">
                {{ user.name }} / {{ user.email }} / {{ user.tel }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false"
              aria-controls="collapseTwo">
                地址 {{ user.address }}
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse
            collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                {{ user.address }}
              </div>
            </div>
          </div>
        </div> -->
        <button class="btn btn-primary mt-3 mb-lg-0 mb-5 text-white w-25"
          @click="submitPayment">
          確定付款
        </button>
      </div>
      <!-- <div class="col-md-3">
        <div class="bg-secondary bg-opacity-10 px-md-3 pb-md-5 pt-md-3 h-auto">
            <div v-for="item in order" :key="item.id">
                <div class="d-flex row mb-3 align-items-center">
                    <div class="col-md-3">
                        <img :src=item.product.imageUrl alt=""
                        class="img-fluid rounded rounded-1">
                    </div>
                    <div class="col-md-6 text-start">{{ item.product.title }}
                       x {{item.qty}}/{{item.product.unit }}</div>
                    <div class="col-md-3">{{ item.final_total }}</div>
                </div>
            </div>
            <hr>
            <div class="fs-3 text-end fw-bold d-flex justify-content-between">
                <span>總計</span>
                <span>NT${{ final_total }}</span>
            </div>
            </div>
      </div> -->
      <div class="col-lg-4 px-md-1 ">
            <div class="bg-secondary bg-opacity-10 rounded-2 px-md-2 pb-md-4 pt-md-3 h-auto pt-3">
              <h3 class="my-lg-2 my-4">購買清單</h3>
              <div v-for="item in order" :key="item.id">
                  <div class="d-flex row mb-3 align-items-center px-4">
                      <div class="col-md-3 col-4 px-md-0">
                          <img :src=item.product.imageUrl alt=""
                          class="img-fluid rounded rounded-1">
                      </div>
                      <div class="col-md-6 col-5 text-start">{{ item.product.title }}
                       x {{item.qty}}/{{item.product.unit }}</div>
                      <div class="col-md-3  col-3 text-end">NT${{ item.final_total }}元</div>
                  </div>
            </div>
              <hr>
            <div class="fs-3 text-end fw-bold d-flex justify-content-between
                px-lg-0 px-4 pb-lg-0 pb-4">
                <span>總計</span>
                <span>NT${{ final_total }}元</span>
            </div>
            </div>
        </div>
    </div>
  </div>

 <footer-banner></footer-banner>
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
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '付款',
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
              this.$router.push({ name: '付款完成頁面', params: { orderId: this.orderId } });
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
