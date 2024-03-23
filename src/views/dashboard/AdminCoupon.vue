<template>
    <VueLoading v-model:active="isLoading"
              loader="bars"
              :is-full-page="fullpage"/>
    <div class="container">
      <div class="d-flex justify-content-between mt-4">
        <h2 class="text-primary mb-3 h2 text-start col-6">優惠卷列表</h2>
        <button class="btn btn-primary text-white fw-bold" type="button"
        @click="openCouponModal('createNew')">
          建立新的優惠卷
        </button>
      </div>
    <table class="table table-hover border rounded rounded-3 mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ formatDate(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
                @click="openCouponModal('edit', item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openCouponModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination 分頁 -->
    <Pagination :pagination="pagination" @emit-pages="getCoupon"></Pagination>
  </div>
  <!-- 編輯新增優惠券 -->
  <ModalCoupon ref="couponModal"
  :temp-Coupons="tempCoupons"
  :is-new="isNew"
  :clear-input="clearInput"
  @update="getCoupon"
  ></ModalCoupon>

  <!-- 刪除優惠券 -->
 <ModalDelCoupon ref="couponDelModal" :is-new="isNew"
  :temp-Coupons="tempCoupons" @update="getCoupon">
 </ModalDelCoupon>
</template>

<script>
import Swal from 'sweetalert2';
// import axios from 'axios';

import Pagination from '@/components/PaginationView.vue';
import ModalCoupon from '../../components/ModalCoupon.vue';
import ModalDelCoupon from '../../components/ModalDelCoupon.vue';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      fullpage: false,
      coupons: [],
      tempCoupons: {},
      pagination: {},
      isNew: false,
    };
  },
  components: {
    Pagination,
    ModalCoupon,
    ModalDelCoupon,
  },
  methods: {
    getCoupon(page = 1) {
      this.isLoading = true;
      this.fullpage = true;
      const url = `${VITE_URL}/api/${VITE_NAME}/admin/coupons?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.isLoading = false;
          this.fullpage = false;
          this.pagination = res.data.pagination;
          // eslint-disable-next-line no-console
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '成功取得優惠卷資訊',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          this.$router.push('/login');
        });
    },
    formatDate(timestamp) {
      const getTime = new Date(timestamp * 1000);
      return getTime.toLocaleDateString();
    },
    openCouponModal(isNew, item) {
      if (isNew === 'createNew') {
        this.tempCoupon = {
          // 預設取得當天日期、預設不啟用
          due_date: Math.floor(new Date().getTime() / 1000),
          is_enabled: 0,
        };
        this.isNew = true;
        this.$refs.couponModal.showModal();
      } else if (isNew === 'edit') {
        this.tempCoupons = { ...item }; // 帶入資料
        this.isNew = false;
        // console.log('父元件', this.tempCoupons);
        this.$refs.couponModal.showModal();
      } else if (isNew === 'delete') {
        this.tempCoupons = { ...item };
        this.$refs.couponDelModal.showModal();
      }
    },
    // getCurrentDate() {
    //   const today = new Date(); // 紀錄當下時間戳
    //   const year = today.getFullYear(); // 年份
    //   const month = String(today.getMonth() + 1).padStart(2, '0'); // 月份
    //   const date = String(today.getDate()).padStart(2, '0'); // 日期
    //   return `${year}/${month}/${date}`; // 回傳日期字串
    // },
    clearInput() {
      this.tempCoupons = { // 清除
      };
    },
  },
  mounted() {
    this.getCoupon();
  },
};
</script>
