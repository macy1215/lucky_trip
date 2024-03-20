<template>
     <VueLoading v-model:active="isLoading"
              loader="bars"
              :is-full-page="fullpage"/>
    <div class="col-md-6 col-12 bgimg banner
    container-fluid vh-100 position-relative" style="z-index: 9;">
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="ol-md-6
            d-flex flex-column
            align-items-center
            align-items-md-start
            justify-content-between justify-content-lg-center py-4">
                <h1 class="h1 text-start">完成結帳</h1>
                <div>付款成功！請您注意近期包裹，如有任何問題歡迎與好嗨遊聯繫。</div>
                <button class="btn btn-primary fs-4 mt-3 text-white w-25" >繼續選購</button>
            </div>
        </div>
    </div>
    <footer-banner></footer-banner>
</template>

<script>
import FooterBanner from '@/components/FooterBanner.vue';

export default {
  data() {
    return {
      isLoading: false,
      fullpage: false,
    };
  },
  components: {
    FooterBanner,
  },
};
</script>

<style>
.bgimg{
    height: 100vh;
}
</style>
