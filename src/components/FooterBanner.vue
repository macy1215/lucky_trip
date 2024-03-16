<template>
    <div class="footerbg py-5">
        <div class="container">
        <div class="row align-items-center py-3 position-relative">
            <div class="col-md-6 col-12">
            <h2 class="text-wrap footerTitle text-white text-md-start fw-bold pe-5 shadow-sm">
                訂閱獲得最新情報<br>及特別折扣！
            </h2>
            <div class="input-group mx-2 pe-5 pb-5">
                <input type="text" class="form-control"
                        placeholder="請輸入email信箱"
                        aria-label="scributBtn"
                        aria-describedby="scributBtn">
                <button class="btn btn-primary" type="button" id="scributBtn"
                    @click="sendEmail">
                    訂閱我們</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div class="bg-primary mb-0">
        <div class="container">
            <div class="row justify-content-between py-4">
                <h5 class="col-md-8 col-12 text-start mb-md-0 pb-3 text-white fs-6">
                © 2024. 版面設計由個人參考網路資源進行二次設計，網站圖片來自於 Unsplash 上的創作者。此網站為個人作品展示，非商業使用。
                </h5>
                <div class="col-md col-12 text-md-end text-start">
                    <RouterLink to="/login" >
                        <span class="text-white">
                            <i class="bi bi-person-circle"></i>
                            <a class="ps-2 text-decoration-none text-white">管理員登入</a>
                        </span>
                    </RouterLink>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {
  },
};
</script>

<style scoped>
.footerbg{
    margin-top: 100px;
    background-size: cover;
    background-image: url(@/assets/images/footer-news.png);
    background-repeat: no-repeat;
    background-position: top center;
}
.footerTitle{
    font-size: 40px;
    line-height:1.6em;
}
@media(max-width: 767px){
    .footerTitle{
        font-size: 40px;
        line-height:1.3em;
        text-align: left;
        padding-bottom: 12px;
}
}
</style>
