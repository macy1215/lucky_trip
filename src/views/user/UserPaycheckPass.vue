<template>
     <VueLoading v-model:active="isLoading"
              loader="bars"
              :is-full-page="fullpage"/>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6
            d-flex flex-column
            align-items-center
            align-items-md-start
            justify-content-between justify-content-lg-center py-4">
                <h1 class="h1 text-start">完成結帳</h1>
                <div class="fs-5 text-black-50 text-wrap text-start"
                style="line-height: 1.6;">
                    付款成功！<br>請您注意近期包裹，如有任何問題歡迎與好嗨遊聯繫。</div>
                <div>
                    <RouterLink :to="`/products`">
                        <button class="btn btn-primary btn-lg mt-4 text-white" >
                            繼續選購
                        </button>
                    </RouterLink>
                </div>
            </div>
            <div class="col-md-6 col-12 bgimg banner
            container-fluid position-relative" style="z-index: 9;">
            </div>
        </div>
    </div>
    <!-- <footer-banner></footer-banner> -->
</template>

<script>
// import FooterBanner from '@/components/FooterBanner.vue';

export default {
  data() {
    return {
      isLoading: false,
      fullpage: false,
    };
  },
//   components: {
//     FooterBanner,
//   },
};
</script>

<style>
.bgimg{
    height: 100vh;
    background-image: url('@/assets/images/paybanner.png');
}
</style>
