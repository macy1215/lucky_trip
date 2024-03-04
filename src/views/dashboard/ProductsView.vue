<template>
  <VueLoading v-model:active="isLoading"/>
  <div class="container">
    <div class="row justify-content-between">
      <h2 class="text-primary mb-3 h2 text-start col-6">方案列表</h2>
      <div class="text-end col-6">
        <button type="button" class="btn btn-primary text-white fw-bold ">新增方案</button>
      </div>
    </div>
    <table class="table table-hover border rounded rounded-3">
        <thead>
            <tr>
                <th scope="col"> 順序</th>
                <th colspan="1" scope="col">方案類別</th>
                <th colspan="1" scope="col">方案標題</th>
                <th colspan="1" scope="col">原始價格</th>
                <th colspan="1" scope="col">上線價格</th>
                <th colspan="1" scope="col">是否啟用</th>
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
                        @click="editProduct(item.id)"
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
                      @click="deletProduct(item.id)"
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
  </div>
</template>

<style lang="scss">
@import '../src/assets/scss/helper/_main.scss';
</style>

<script>

export default {
  data() {
    return {
      products: {},
      isLoading: false,
    };
  },
  mounted() {
    this.getProducts(1);
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_NAME}/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
          console.log(this.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editProduct(id) {
      console.log('編輯產品', id);
    },
    deletProduct(id) {
      console.log('刪除產品', id);
    },
  },
};
</script>
