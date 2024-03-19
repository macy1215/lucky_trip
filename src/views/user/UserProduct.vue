<template>
    <h1>單一產品頁</h1>
    <div class="container">
      <div>{{ product.canclepolic }}</div>
      <div>{{ product.title }}</div>
      <div>{{ product.content }}</div>
      <div>{{ product.schedule }}</div>
      <div>{{ product.origin_price }}</div>
      <div>{{ product.price }}</div>
      <div>{{ product.minpeople }}</div>
      <div>{{ product.num }}</div>
    </div>
    <footer-banner></footer-banner>
</template>

<script>
import FooterBanner from '@/components/FooterBanner.vue';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      const url = `${VITE_URL}/api/${VITE_NAME}/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    FooterBanner,
  },
  mounted() {
  // 存取路由的屬性 $route
    // console.log(this.$route);
    this.getProduct();
  },
};

</script>

<style scoped>
</style>
