<template>
 <h1></h1>
 <div class="container">
    <div class="row">
        <div class="col-lg-8">
            <!-- <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        建立訂單
                    </li>
                    <li class="breadcrumb-item disable" aria-current="page">
                        付款
                    </li>
                </ol>
            </nav> -->
            <div class="my-md-0 my-5 row justify-content-center">
          <VeeForm ref="form" class="col-md-10" @submit="createOrder" v-slot="{ errors }" >
            <div class="mb-4">
              <h3 class="text-start fs-3">聯絡資訊</h3>
              <div class="mb-3 d-flex align-items-center">
                  <VeeField
                    id="email"
                    name="email"
                    type="email"
                    class="form-control w-100"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入Email信箱"
                    rules="email|required"
                    v-model="form.user.email"></VeeField>
                    <error-message name="email" class="invalid-feedback text-start"></error-message>
              </div>
            </div>

            <div>
              <h3 class="text-start fs-3">寄件地址</h3>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <VeeField
                    id="name"
                    name="姓名"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    placeholder="收件人姓名"
                    rules="required"
                    v-model="form.user.name"></VeeField>
                  <error-message name="姓名" class="invalid-feedback  text-start"></error-message>
                </div>
                <div class="mb-3 col-md-6">
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
                  <error-message name="電話" class="invalid-feedback text-start"></error-message>
                </div>
              </div>
            </div>

            <div class="mb-3">
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
              <error-message name="地址" class="invalid-feedback text-start"></error-message>
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
              <button class="btn btn-danger" type="submit">送出訂單</button>
            </div>
          </VeeForm>
        </div>
        </div>
        <div class="col-lg-4 px-md-1 ">
            <div class="bg-secondary bg-opacity-10 rounded-2 px-md-2 pb-md-4 pt-md-3 h-auto pt-3">
              <h3 class="my-lg-2 my-4">購買清單</h3>
              <div v-for="cart in carts" :key="cart.id">
                  <div class="d-flex row mb-3 align-items-center px-4">
                      <div class="col-md-3 col-5 px-md-0">
                          <img :src=cart.product.imageUrl alt=""
                          class="img-fluid rounded rounded-1">
                      </div>
                      <div class="col-md-6 col-4 text-start">
                        {{ cart.product.title }}
                      </div>
                      <div class="col-md-3 col-3 text-end">NT${{ cart.final_total }}元</div>
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
 <footer-banner/>
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
    ...mapActions(cartStore, ['addToCart', 'removeAllCart', 'removeCartItem', 'changeCartQty', 'getCart']),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入以「09」開頭的行動電話號碼';
    },
    createOrder() {
      const order = this.form;
      const url = `${VITE_URL}/api/${VITE_NAME}/order`;
      this.$http
        .post(url, { data: order })
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: '訂單成立',
          });
          // eslint-disable-next-line no-alert, no-console
          console.log(res, this.form);
          this.orderId = res.data.orderId;
          this.$refs.form.resetForm();
          this.$router.push(`/paycheck/${res.data.orderId}`);
          localStorage.setItem('orderId', res.data.orderId);
          this.getCart();
        })
        .catch((err) => {
          // eslint-disable-next-line no-alert
          alert(err.response.data.message);
        });
    },
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
