<template>
    <VueLoading v-model:active="isLoading"/>
    <div class="container">
      <div class="row justify-content-between">
        <h2 class="text-primary mb-3 h2 text-start col-6">訂單列表</h2>
      </div>
      <table class="table table-hover border rounded rounded-3 table-responsive">
          <thead>
              <tr class="text-nowrap">
                <th colspan="1" scope="col">訂單編號</th>
                <th colspan="1" scope="col">成立時間</th>
                <th colspan="1" scope="col">訂單內容</th>
                <th colspan="1" scope="col">訂購人</th>
                <th colspan="1" scope="col">聯絡電話</th>
                <th colspan="1" scope="col">合計</th>
                <th colspan="1" scope="col">付款狀態</th>
                <th colspan="1" scope="col">編輯</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="item in orders" :key="item.id" class="align-middle">
              <th scope="row">{{ item.id }}</th>
                <td>{{  new Date(item.create_at * 1000).toLocaleDateString() }}</td>
                <td>
                  <ul class="ps-0 mb-0">
                    <li v-for="pdlist in item.products" :key="pdlist.product_is">
                    {{ pdlist.product.title }} | {{ pdlist.qty}}人</li>
                  </ul>
                </td>
                <td>{{ item.user.name }}</td>
                <td>{{ item.user.tel }}</td>
                <td>{{ item.total}}</td>
                <td>
                  <span v-if="item.is_paid" class="text-success">已付款</span>
                  <span v-else class="text-danger">未付款</span>
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
                      編輯
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="openModal('delete',item)"
                      >
                      <span class="spinner-border spinner-border-sm"
                      role="status" aria-hidden="true"  v-if="item.num === 0"
                      ></span>
                     刪除
                    </button>
                  </div>
                </td>
            </tr>
          </tbody>
      </table>
      <Pagination :pagination="pagination" @emit-pages="getOrders"></Pagination>
  </div>
  <!-- 編輯訂單-->
  <OrderEditCompanent  ref="orderEditModal" :temp-order="tempOrder"
  @update="getOrders"></OrderEditCompanent>
  <!-- 刪除訂單 -->
  <OrdelDelComponent ref="delOrderModal" :temp-order="tempOrder"
  @update="getOrders" ></OrdelDelComponent>
</template>
<style lang="scss">
@import '../src/assets/scss/helper/_main.scss';
</style>

<script>
import OrderEditCompanent from '@/components/OrderEditComponent.vue';
import OrdelDelComponent from '@/components/OrderDelComponent.vue';
import Pagination from '@/components/PaginationView.vue';

export default {
  components: {
    OrderEditCompanent,
    OrdelDelComponent,
    Pagination,
  },
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
    };
  },
  mounted() {
    this.getOrders(1);
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_NAME}/admin/orders?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          console.log(this.orders);
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal(status, item) {
      if (status === 'edit') {
        this.tempOrder = { ...item }; // 因為修改所以要將將值帶入input
        this.status = false;
        console.log(this.tempOrder);
        this.$refs.orderEditModal.showModal();
      } else if (status === 'delete') {
        this.tempOrder = { ...item };
        console.log(this.tempOrder);
        this.$refs.delOrderModal.showModal();
      }
      // myModal.show();
    },
  },
};
</script>
