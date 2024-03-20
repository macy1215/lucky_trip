<template>
 <h1></h1>
 <div class="container">
    <div class="row">
        <div class="col-md-8">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        建立訂單
                    </li>
                    <li class="breadcrumb-item disable" aria-current="page">
                        付款
                    </li>
                </ol>
            </nav>
            <div class="my-5 row justify-content-center">
          <VeeForm ref="form" class="col-md-6" @submit="createOrder" v-slot="{ errors }" >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
                <v-field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="form.user.email"></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="form.user.tel"
                ></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>

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

              <v-field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
              >
            </v-field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
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
        <div class="col-md-4 bg-secondary bg-opacity-10 px-md-4 pb-md-5 pt-md-3" >
            <h3>購買清單</h3>
            <div v-for="cart in carts" :key="cart.id">
                <div class="d-flex row mb-3 align-items-center">
                    <div class="col-md-3">
                        <img :src=cart.product.imageUrl alt=""
                        class="img-fluid rounded rounded-1">
                    </div>
                    <div class="col-md-6 text-start">{{ cart.product.title }}</div>
                    <div class="col-md-3">{{ cart.final_total }}</div>
                </div>
            </div>
            <hr>
            <div class="fs-3 text-end fw-bold d-flex justify-content-between">
                <span>總計</span>
                <span>NT${{ final_total }}</span>
            </div>
        </div>
    </div>
 </div>
 <footer-banner></footer-banner>
</template>

<script>
import FooterBanner from '@/components/FooterBanner.vue';
import { mapActions, mapState } from 'pinia';

import cartStore from '@/stores/cartStore';

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'removeAllCart', 'removeCartItem', 'changeCartQty']),
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
