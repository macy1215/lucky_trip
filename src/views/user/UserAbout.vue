<template>
  <div class="aboutBanner"></div>
  <div class="container">
    <div class="row position-relative my-md-5 my-5 mobilBox">
      <div class="d-md-block col-md-7 col-12 offset-md-1 overflow-hidden my-md-5 my-4 rounded-2">
        <img src="@/assets/images/aboutTitle.png" alt="關於我"
        class="rounded-2 object-fit-cover overflow-hidden img-fluid">
      </div>
      <div class="col-md-5 position-absolute  d-md-block d-none aboutBox1">
        <div class="p-3 py-md-4 ps-md-4 ppe-md-4 bg-white rounded-1 shadow-sm">
          <div class="row">
            <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none">
                      <span class="text-decoration-none link-secondary icon-link-hover">
                        好嗨遊首頁
                      </span>
                    </RouterLink >
                  </li>
                  <li class="breadcrumb-item">
                    <RouterLink :to="`/about`" class="text-decoration-none link-secondary">關於
                    </RouterLink>
                  </li>
                </ol>
              </nav>
              <h2 class="fs-3 fs-md-4 fs-lg-2 fw-bold lh-base mb-4 text-start">
                旅遊可以很簡單！
              </h2>
              <p class="text-secondary text-prewrap mb-0 text-start" style="line-height: 1.6;">
                誰說旅遊一定要大包小包？好嗨遊是一群熱愛台灣的一群旅遊家，我們追求用一天帶你玩透臺灣的所有角落，讓旅遊出門可以超輕鬆
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 d-md-none d-block aboutBox1">
        <div class="p-3 py-md-4 ps-md-4 pe-md-0 bg-white rounded-1 shadow-sm">
          <div class="row">
            <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none">
                      <span class="text-decoration-none link-secondary icon-link-hover">
                        好嗨遊首頁
                      </span>
                    </RouterLink >
                  </li>
                  <li class="breadcrumb-item">
                    <RouterLink :to="`/about`" class="text-decoration-none link-secondary">關於
                    </RouterLink>
                  </li>
                </ol>
              </nav>
              <h2 class="fs-3 fs-md-4 fs-lg-2 fw-bold lh-base mb-4 text-start">
                旅遊可以很簡單！
              </h2>
              <p class="text-secondary text-prewrap mb-0 text-start" style="line-height: 1.6;">
                誰說旅遊一定要大包小包？好嗨遊是一群熱愛台灣的一群旅遊家，我們追求用一天帶你玩透臺灣的所有角落，讓旅遊出門可以超輕鬆
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row flex-row-reverse position-relative  my-md-5 mt-4 mb-5 pb-5  mobilBox">
      <div class="col-md-7 col-12 d-md-block overflow-hidden offset-md-1 rounded-2">
        <img src="@/assets/images/aboutTitle2.png" alt="旅遊圖"
        class="rounded-2 object-fit-cover overflow-hidden img-fluid">
      </div>
      <div class="col-md-5 col-12 position-absolute d-md-block d-none  p-md-0 my-4 aboutBox2">
        <div class="p-3 py-md-4 ps-md-4 pe-md-4 bg-white rounded-1 shadow-sm">
          <div class="row">
            <div class="col-md-12 text-start">
              <h3 class="fs-4">為什麼需要好嗨遊？</h3>
              <p class="text-secondary
              text-prewrap mb-1 text-start"
              style="line-height: 1.6;">在這個匆匆忙忙的世界裡，
                我們常常忽略了周遭的美好。
                遊台灣這件事情是一道耀眼的光，
                穿透了日常的灰濛。
                為你在匆忙的生活
                為我們帶來了片刻的寧靜和歡笑。
              </p>
              <p class="text-secondary
              text-prewrap mb-0 text-start d-lg-block d-none"
              style="line-height: 1.6;">
                踏上這段旅程，彷彿進入了一幅繽紛的畫卷，
                每一個角落都是那麼生動。從繁華的都市到幽靜的山林，台灣一日遊展現了這片土地多樣的風貌，讓人仿佛穿越了時空，感受到了無盡的驚喜和美好。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-12 d-md-none d-block p-md-0 my-4 aboutBox2">
        <div class="p-3 py-md-4 ps-md-4 pe-md-0 bg-white rounded-1 shadow-sm">
          <div class="row">
            <div class="col-md-12 text-start">
              <h3 class="fs-4">為什麼需要好嗨遊？</h3>
              <p class="text-secondary
              text-prewrap mb-1 text-start"
              style="line-height: 1.6;">在這個匆匆忙忙的世界裡，
                我們常常忽略了周遭的美好。
                遊台灣這件事情是一道耀眼的光，
                穿透了日常的灰濛。
                為你在匆忙的生活
                為我們帶來了片刻的寧靜和歡笑。
              </p>
              <p class="text-secondary
              text-prewrap mb-0 text-start d-lg-block d-none"
              style="line-height: 1.6;">
                踏上這段旅程，彷彿進入了一幅繽紛的畫卷，
                每一個角落都是那麼生動。從繁華的都市到幽靜的山林，台灣一日遊展現了這片土地多樣的風貌，讓人仿佛穿越了時空，感受到了無盡的驚喜和美好。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-banner></footer-banner>
</template>

<script>
// import axios from 'axios';
// import Swal from 'sweetalert2';
import FooterBanner from '../../components/FooterBanner.vue';

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
    };
  },
  components: {
    FooterBanner,
  },
};
</script>

<style scoped>
.aboutBanner{
  background-image: url('@/assets/images/aboutBanner.png');
  background-position: center;
  background-size: cover;
  padding: 160px 0px;
}
.aboutBox1{
  top:30%;
  left:57%;
}
.aboutBox2{
  top:15%;
  left:10%;
}
.boxText{
  padding-right: 60px;
}
@media (max-width: 999px) {
  .aboutBanner{
  padding: 80px 0px;
 }
  .aboutBox1{
    top:30%;
    left:50%;
  }
  .aboutBox2{
    top:10%;
    left:10%;
  }
  .boxText{
  padding-right: 20px;
}
}
@media (max-width: 770px) {
  .aboutBox1{
    top:60%;
    left:0%;
  }
  .aboutBox2{
    top:60%;
    left:0%;
  }
  .boxText{
  padding-right: 0px;
}
}
@media (max-width: 577px) {
  .mobilBox{
    margin: 20px 8px;
  }
  .aboutBox1{
    top:50%;
    left:0%;
  }
  .aboutBox2{
    top:50%;
    left:0%;
  }
}
</style>
