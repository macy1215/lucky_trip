<template>
  <div class="vl-parent">
  <VueLoading v-model:active="isLoading"
              loader="bars"
              :is-full-page="fullpage"/>
  <div class="container">
    <div class="row justify-content-between">
      <h2 class="text-primary mb-3 h2 text-start col-6">方案列表</h2>
      <div class="text-end col-6">
        <button type="button" class="btn btn-primary text-white fw-bold"
        @click="openModal('new')">新增方案</button>
      </div>
    </div>
    <table class="table table-hover border rounded rounded-3">
        <thead>
            <tr>
                <th scope="col"> 上架日期</th>
                <th colspan="1" scope="col">方案類別</th>
                <th colspan="1" scope="col">方案標題</th>
                <th colspan="1" scope="col">原始價格</th>
                <th colspan="1" scope="col">上線價格</th>
                <th colspan="1" scope="col">啟用狀態</th>
                <th colspan="1" scope="col">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item) in products" :key="item.id" class="align-middle">
            <th scope="row">{{ item.num }}</th>
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td>NT$ {{ item.origin_price }}/{{ item.unit }} </td>
                <td>NT$ {{ item.price }}/{{ item.unit }}</td>
                <td>
                  <span v-if="item.is_enabled" class="text-success">啟用</span>
                  <span v-else>不啟用</span>
                </td>
                <td>
                    <div class="btn-group btn-group-sm">
                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        @click="openModal('edit',item)"
                        >
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status" aria-hidden="true" v-if="item.num === 0">
                      </span>
                      編輯內容
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="openModal('delete',item)"
                      >
                      <span class="spinner-border spinner-border-sm"
                      role="status" aria-hidden="true"  v-if="item.num === 0"
                      ></span>
                     刪除內容
                    </button>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
    <Pagination :pagination="pagination" @emit-pages="getProducts"></Pagination>
  </div>
  <!-- Modal 編輯產品-->
  <ModalCompanent ref="modal" :temp-product="tempProduct" :is-new="isNew"
  :clear-input="clearInput" @update="getProducts"></ModalCompanent>

  <!-- 刪除方案 -->
  <ModalDelComponent ref="delModal" :temp-product="tempProduct"
  @update="getProducts" ></ModalDelComponent>
  </div>
</template>

<style lang="scss">
@import '../src/assets/scss/helper/_main.scss';
</style>

<script>
import { toast } from 'vue3-toastify';

import ModalCompanent from '@/components/ModalComponent.vue';
import ModalDelComponent from '@/components/ModalDelComponent.vue';
import Pagination from '@/components/PaginationView.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  components: {
    ModalCompanent,
    ModalDelComponent,
    Pagination,
  },
  data() {
    return {
      products: [],
      isLoading: false,
      fullpage: false,
      tempProduct: { // 暫存
        imagesUrl: [], // 小圖
        minpeople: '',
        regist: '',
        schedule: [],
      },
      // 判斷是新增還是修改
      isNew: false,
      pagination: {},
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_NAME}/admin/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
          console.log(res.data.message);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '成功取得產品列表',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          this.$router.push('/login');
        });
    },
    openModal(isNew, item) {
      if (isNew === 'new') {
        // 內容淨空
        this.tempProduct = {
          imagesUrl: [],
        };
        this.isNew = true;
        this.$refs.modal.showModal();
      } else if (isNew === 'edit') {
        this.tempProduct = { ...item }; // 因為修改所以要將將值帶入input
        this.isNew = false;
        this.$refs.modal.showModal();
      } else if (isNew === 'delete') {
        this.tempProduct = { ...item };
        this.$refs.delModal.showModal();
      }
      // myModal.show();
    },
    clearInput() {
      this.tempProduct = { // 清除
        imageUrl: '',
      };
    },
    deleteProduct() {
      const url = `${this.apiUrl}/api/${this.path}/admin/product/${this.tempProduct.id}`;
      this.$http
        .delete(url, { data: this.tempProduct })
        .then((res) => {
          // eslint-disable-next-line no-console
          Swal.fire({
            position: 'top-end',
            icon: res.data.message,
            title: '成功取得產品資訊',
            showConfirmButton: false,
            timer: 1500,
          });
          this.$refs.dModal.closeProduct();
          this.getData();
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    },
  },
};
</script>
