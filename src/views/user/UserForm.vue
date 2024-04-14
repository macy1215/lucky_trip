<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-10 col-12 px-3">
        <div class="position-relative m-4 px-md-5 px-2">
          <div class="progress" style="height: 1px">
            <div
              class="progress-bar w-50"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <router-link
            type="button"
            class="position-absolute top-0 start-0 ms-3 translate-middle
            btn btn-sm btn-primary rounded-pill text-white"
            :to="`/carts`"
            style="width: 2rem; height: 2rem"
            >1</router-link
          >
          <button
            type="button"
            class="position-absolute top-0 start-50 translate-middle
            btn btn-sm btn-primary rounded-pill text-white"
            style="width: 2rem; height: 2rem"
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
          <div class="col text-end text-secondary">付款確認</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-md-5 py-2">
    <div class="row">
      <div class="col-lg-4 px-md-1 d-md-none d-block">
        <div
          class="bg-secondary bg-opacity-10 rounded-2 px-md-2 pb-md-4 pt-md-3 h-auto pt-3 mb-3 mt-5"
        >
          <h3 class="my-md-0 my-2 pb-2 text-center">
            <i class="bi bi-list-ol pe-2"></i>購買清單
          </h3>
          <div v-for="cart in carts" :key="cart.id">
            <div class="d-flex row mb-3 align-items-center px-4">
              <div class="col-md-3 col-6 px-md-0">
                <img
                  :src="cart.product.imageUrl"
                  alt=""
                  class="img-fluid rounded rounded-1"
                />
              </div>
              <!-- mobil -->
              <div class="col-6 text-start d-md-none d-block">
                <div class="mb-3">{{ cart.product.title }}</div>
                <div>NT${{ cart.final_total }}元</div>
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
      <div class="col-lg-8">
        <div class="my-md-0 mt-2 mb-3 px-2 row justify-content-center">
          <VeeForm
            ref="form"
            class="col-md-10"
            @submit="createOrder"
            v-slot="{ errors }"
          >
            <div class="mb-4">
              <h3 class="text-start fs-3">聯絡資訊</h3>
              <div class="text-start pb-2">
                以下資訊為寄件時填寫的資料，請填寫以下必填欄位
              </div>
              <div class="text-danger text-start fw-bold pb-4">*為必填</div>
              <div class="mb-3 d-flex flex-column">
                <label for="email" class="form-label text-start required"
                  >電子信箱
                  <strong class="text-danger fw-bold">*</strong>
                </label>
                <VeeField
                  id="email"
                  name="email"
                  type="email"
                  class="form-control w-100"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入Email信箱"
                  rules="email|required"
                  v-model="form.user.email"
                ></VeeField>
                <error-message
                  name="email"
                  class="invalid-feedback text-start"
                ></error-message>
              </div>
            </div>

            <div>
              <h3 class="text-start fs-3 mb-3">收件者資訊欄</h3>
              <div class="row">
                <div class="mb-3 col-md-6 d-flex flex-column">
                  <label for="name" class="form-label text-start required"
                    >姓名
                    <strong class="text-danger fw-bold">*</strong>
                  </label>
                  <VeeField
                    id="name"
                    name="姓名"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    placeholder="收件人姓名"
                    rules="required"
                    v-model="form.user.name"
                  ></VeeField>
                  <error-message
                    name="姓名"
                    class="invalid-feedback text-start"
                  ></error-message>
                </div>
                <div class="mb-3 col-md-6 d-flex flex-column">
                  <label for="name" class="form-label text-start required"
                    >電話
                    <strong class="text-danger fw-bold">*</strong>
                  </label>
                  <VeeField
                    id="tel"
                    name="電話"
                    type="tel"
                    class="form-control"
                    :class="{ 'is-invalid': errors['電話'] }"
                    placeholder="收件人行動電話"
                    :rules="isPhone"
                    v-model="form.user.tel"
                  ></VeeField>
                  <error-message
                    name="電話"
                    class="invalid-feedback text-start"
                  ></error-message>
                </div>
              </div>
            </div>

            <!-- <div class="mb-3"> -->
            <!-- <v-field
              id="area"
              name="地區"
              class="form-control mb-2 w-25"
              :class="{ 'is-invalid': errors['area'] }"
              placeholder="請輸入地區"
              rules="required"
              v-model="form.user.area"
              as="select"
            >
              <option disabled selected value="">請選擇地區</option>
              <option :value="item" v-for="item in city" :key="item">{{item}}</option>
            </v-field>
            <error-message name="地區" class="invalid-feedback"></error-message> -->
            <div class="mb-3 col-md-12 d-flex flex-column">
              <label for="name" class="form-label text-start required"
                >地址
                <strong class="text-danger fw-bold">*</strong>
              </label>
              <VeeField
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入寄送地址"
                rules="required"
                v-model="form.user.address"
              >
              </VeeField>
              <error-message
                name="地址"
                class="invalid-feedback text-start"
              ></error-message>
            </div>

            <div class="mb-3 text-start">
              <label for="message" class="form-label">備註留言</label>
              <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-end">
              <button class="btn btn-primary text-white" type="submit">
                送出訂單
              </button>
            </div>
          </VeeForm>
        </div>
      </div>
      <div class="col-lg-4 px-md-1 d-md-block d-none">
        <div
          class="bg-secondary bg-opacity-10 rounded-2 px-md-2 pb-md-4 pt-md-3 h-auto pt-3 mb-5"
        >
          <h3 class="my-md-0 my-2 pb-2 text-center">
            <i class="bi bi-list-ol pe-2"></i>購買清單
          </h3>
          <div v-for="cart in carts" :key="cart.id">
            <div class="d-flex row mb-3 align-items-center px-4">
              <div class="col-md-3 col-6 px-md-0">
                <img
                  :src="cart.product.imageUrl"
                  alt=""
                  class="img-fluid rounded rounded-1"
                />
              </div>
              <!-- pc -->
              <div class="col-md-6 col-4 text-start d-md-block d-none">
                {{ cart.product.title }}
              </div>
              <div class="col-md-3 col-3 text-end d-md-block d-none">
                NT${{ cart.final_total }}元
              </div>
              <!-- mobil -->
              <div class="col-6 text-start d-md-none d-block">
                <div class="mb-3">{{ cart.product.title }}</div>
                <div>NT${{ cart.final_total }}元</div>
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
  </div>
  <footer-banner />
</template>

<script>
import FooterBanner from '@/components/FooterBanner.vue';
import { mapActions, mapState } from 'pinia';

import cartStore from '@/stores/cartStore';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      isLoading: true,
      //  表單
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    ...mapActions(cartStore, [
      'addToCart',
      'removeAllCart',
      'removeCartItem',
      'changeCartQty',
      'getCart',
    ]),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value)
        ? true
        : '請輸入以「09」開頭的行動電話號碼';
    },
    createOrder() {
      Swal.fire({
        title: '確定要送出訂單資訊嗎？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2e949c',
        cancelButtonColor: '#ADADAD',
        confirmButtonText: '確認送出',
        cancelButtonText: '取消',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          const order = this.form;
          const url = `${VITE_URL}/api/${VITE_NAME}/order`;
          this.$http
            .post(url, { data: order })
            .then((res) => {
              this.orderId = res.data.orderId;
              this.$refs.form.resetForm();
              this.$router.push(`/paycheck/${res.data.orderId}`);
              localStorage.setItem('orderId', res.data.orderId);
              this.getCart();
              Swal.fire({
                icon: 'success',
                title: '訂單成立',
              });
            })
            .catch((err) => {
              Swal.fire({
                icon: 'success',
                title: err.response.data.message,
              });
            });
        }
      });
    },
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
