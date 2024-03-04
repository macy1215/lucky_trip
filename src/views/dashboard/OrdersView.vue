<template>
    <VueLoading v-model:active="isLoading"/>
    <div class="container">
      <div class="row justify-content-between">
        <h2 class="text-primary mb-3 h2 text-start col-6">訂單列表</h2>
      </div>
      <table class="table table-hover border rounded rounded-3 table-responsive">
          <thead>
              <tr class="text-nowrap">
                <th>
                    建立時間
                </th>
                <th>
                    訂單編號
                </th>
                <th width="300">
                    訂單內容
                </th>
                <th>
                    訂購人
                </th>
                <th>
                    聯絡電話
                </th>
                <th>
                    合計
                </th>
                <th>
                    付款
                </th>
                <th>
                    編輯
                </th>
              </tr>
          </thead>
          <tbody>
          </tbody>
      </table>
    </div>
  </template>

<style lang="scss">
@import '../src/assets/scss/helper/_main.scss';
</style>

<script>

export default {
  data() {
    return {
      orders: [],
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
          console.log(res);
          this.orders = res.data.orders;
          console.log(this.orders);
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
