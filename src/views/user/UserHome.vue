<template>
  <div class="position-relative">
    <div class="container-lg">
      <div class="h-100 position-absolute
                  d-flex justify-content-center
                  align-items-md-center
                  pe-4 banTitle
                  align-items-start">
          <div class="text-start">
            <h2 class="h2 fw-bold text-wrap text-md-start pe-5
              text-white d-md-block d-none text-dark">
                一起前進台灣的每一個角落<br>
                美好回憶由你創造
            </h2>
            <h3 class="fw-bold text-wrap text-md-center pe-md-5 pe-4
            text-white d-md-none text-start mobiltitle">
              好嗨遊與你一起輕鬆走！
            </h3>
            <RouterLink :to="`/products`">
              <button type="button" class="my-md-3 my-1 btn btn-primary text-white
                btn-lg fw-bold btnAnimate">
                探索行程
              </button>
            </RouterLink>
          </div>
      </div>
      <img src="@/assets/images/personback2.png"
              class="position-absolute bottom-0 end-0 w-25 pe-4
              d-md-block d-none" style="z-index:10;" alt="旅行者">
    </div>
    <div class="position-absolute pe-5 banBgCol"></div>
    <swiper-banner></swiper-banner>
  </div>
  <div class="container">
  <div class="section mt-5 mx-auto pt-4 justify-content-between introBox">
    <h2 class="h2 text-primary fw-bold">好嗨遊推薦</h2>
    <p class="text-wrap mx-auto px-md-0 px-4 lh-base mt-3 lh-lg">
      <span style="color: #ab6418;" class="fw-bold">想在台灣旅遊，你又多了一種選擇！</span>
      <br>
      好嗨遊了解你跟團不自由的感覺，也了解你自由行查資料的辛苦。
      好嗨遊讓您用最優惠的價格玩到最豐富的行程！</p>
      <RouterLink :to="`/products`" >
        <button type="button" class="btn btn-primary text-white px-4 btnAnimate">前往探索</button>
      </RouterLink>
  </div>
  <div class="mt-5 pt-4 justify-content-between container px-lg-5 px-2">
    <h3 class="h3 text-primary fw-bold">焦點話題</h3>
      <div class="row pt-3 px-1 d-md-flex mx-auto justify-content-center">
        <div class="card col-md-3 col-12 p-0 mb-md-0 mb-4 border-0 me-md-4 me-0 shadow hover"
        v-for="product in products.slice(-3)" :key="product+123">
          <RouterLink :to="`/product/${product.id}`" class="text-decoration-none">
              <img class="img-fluid border-0 rounded-top " :src="product.imageUrl" :alt="product">
              <div class="card-body">
                <h5 class="card-title h5 text-primary">{{product.title}}</h5>
                <p class="card-text overflow-hidden lh-base text-start"
                style="height: 70px;">
                  {{product.description}}
                </p>
                <RouterLink :to="`/product/${product.id}`">
                  <a href="#" class="btn btn-primary text-white">點我看行程</a>
                </RouterLink>
              </div>
          </RouterLink>
        </div>
      </div>
  </div>
</div>

  <div class="container mt-5 pt-4 pb-4 justify-content-between">
      <h2 class="h2 text-primary fw-bold">我猜你想找...</h2>
      <ul class="d-md-flex mt-3 justify-content-center align-middle px-5">
        <li class="circleBox my-0px mx-4 rounded-circle">
          <RouterLink :to="`/products?category=文化探索`"
            class="img-fluid d-block walkImg h-100 w-100 text-decoration-none">
            <div class="coverTxtBox">
              <span class="fs-2 fw-bold text-warp text-white">
                文化探索
              </span>
            </div>
          </RouterLink>
        </li>
        <li class="circleBox my-0px  mx-4 rounded-circle">
          <RouterLink :to="`/products?category=美食之旅`"
            class="img-fluid d-block foodImg h-100 w-100 text-decoration-none">
            <div class="coverTxtBox">
              <span class="fs-2 fw-bold text-warp text-white">
                美食之旅
              </span>
            </div>
          </RouterLink>
        </li>
        <li class="circleBox my-0px  mx-4 rounded-circle">
          <RouterLink :to="`/products?category=親子出遊`"
          class="img-fluid d-block familyImg h-100 w-100 text-decoration-none"
          >
            <div class="coverTxtBox">
              <span class="fs-2 fw-bold text-warp text-white">
                親子旅遊
              </span>
            </div>
          </RouterLink>
        </li>
        <li class="circleBox my-0px  mx-4 rounded-circle">
          <RouterLink :to="`/products?category=親子出遊`"
          class="img-fluid d-block vacationImg h-100 w-100 text-decoration-none">
            <div class="coverTxtBox">
              <span class="fs-2 fw-bold text-warp text-white">
                休閒旅遊
              </span>
            </div>
          </RouterLink>
        </li>
        <li class="circleBox my-0px  mx-4 rounded-circle">
          <RouterLink :to="`/products?category=自然景色`"
          class="img-fluid d-block natureImg h-100 w-100 text-decoration-none">
            <div class="coverTxtBox">
              <span class="fs-2 fw-bold text-warp text-white">
                自然景色
              </span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>

  <div class="bg-primary w-auto bg-opacity-10 mt-md-5 py-md-3 pb-5">
  <div class="container my-5 py-4">
    <div class="row align-items-md-center py-3 px-md-0 px-2 position-relative">
      <div class="col-md col-12">
        <h2 class="text-wrap activeTitle text-md-start fw-bold mb-5" style="z-index:10;">
          在愛的旅途中每一步都是溫暖的延續。讓我們攜手為偏鄉孩子的未來繪上希望的色彩...
        </h2>
      </div>
      <div class="col-md col-12 position-relative activebox">
        <img src="@/assets/images/benner-active.png"
        class="position-absolute top-0 start-0 w-100 translate-middle-y" alt="">
      </div>
    </div>
  </div>
  </div>
  <footer-banner/>
</template>

<script>
import Swal from 'sweetalert2';

import SwiperBanner from '../../components/SwiperBanner.vue';
import FooterBanner from '../../components/FooterBanner.vue';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      recommend: [],
      categories: ['文化探索', '休閒渡假', '自然景色', '親子出遊', '美食之旅'],
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      const url = `${VITE_URL}/api/${VITE_NAME}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
  },
  getCategories() {
    this.isLoading = true;
    const { category = '' } = this.$route.query;
    const url = `${VITE_URL}/api/${VITE_NAME}/products/?category=${category}`;
    this.$http
      .get(url)
      .then((res) => {
        this.products = res.data.products;
        this.isLoading = false;
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      });
  },
  components: {
    SwiperBanner,
    FooterBanner,
  },
};
</script>

<style scoped>
.introBox{
  width: 40%;
}
.btnAnimate:hover{
  animation: zoom 1s ease;
}
.card:hover{
   animation: swing 1s ease;
}

/* 圓圈符號 */
.circleBox{
    width: 160px;
    height: 160px;
    overflow: hidden;
}
.coverTxtBox{
  background-color:#273e3e;
  opacity: 0;
  margin:0px auto;
  padding: 65px 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
}
.coverTxtBox:hover{
  opacity: 0.75;
}
.circleBox:hover{
  animation: jump 1s ease;
}

.walkImg{
  background-image: url('@/assets/images/circle-walk.png');
  background-size: cover;
}
.foodImg{
  background-image: url('@/assets/images/circle-food.png');
  background-size: cover;
}
.familyImg{
  background-image: url('@/assets/images/circle-family.png');
  background-size: cover;
}
.vacationImg{
  background-image: url('@/assets/images/circle-culture.png');
  background-size: cover;
}
.natureImg{
  background-image: url('@/assets/images/circle-nature.png');
  background-size: cover;
}
@keyframes  swing {
  15% { transform:  translateX(5px) rotate(1deg);}
  30% { transform:  translateX(-5px) rotate(-1deg); }
  45% { transform:  translateX(2px) rotate(1deg); }
  60% { transform:  translateX(-2px) rotate(-1deg);}
  100% { transform:  translateX(0px); }
}
@keyframes  jump {
  15% { transform:  translateY(5px) rotate(3deg);}
  30% { transform:  translateY(-5px) rotate(-3deg); }
  45% { transform:  translateY(5px) rotate(3deg); }
  60% { transform:  translateY(-5px) rotate(-3deg);}
  100% { transform:  translateY(0px); }
}
@keyframes  zoom  {
  15% { transform:  scale(1.1) rotate(1deg);}
  30% { transform:  scale(0.9) rotate(-1deg); }
  45% { transform:  scale(1.1) rotate(1deg); }
  60% { transform:  scale(0.9) rotate(-1deg);}
  100% { transform:  scale(1); }
}
  .activeTitle{
    font-size: 40px;
    line-height:1.6em;
  }
  .activebox{
    margin-left: -100px;
  }
  .banBgCol{
    background:linear-gradient(to bottom, #409798 30%, #d9a187 80%);
    opacity: 0.6;
    width: 50%;
    height: 80vh;
  }
  @media(max-width: 998px){
    .banBgCol{
    width: 50%;
    height: 80vh;
  }
  }
  @media(max-width: 767px){
  /*產品手機*/
  .introBox{
  width: 90%;
  }
  .activebox {
      margin-top: 24px;
      margin-left: 0px;
  }
  .banBgCol{
    width: 80%;
    z-index: 9;
    margin-top: 120px;
    height: 50vh;
  }
  .mobiltitle{
    width: 90%;
    margin-top: 100px;
  }
  @media(max-width: 430px){
    .mobiltitle{
    width: 90%;
    margin-top: 140px;
    padding-left: 0px;
    }
    .banBgCol{
    width: 80%;
    z-index: 9;
    margin-top: 150px;
    height: 35vh;
    }
  }
  @media(max-width: 390px){
    .banBgCol{
    width: 80%;
    z-index: 9;
    margin-top: 120px;
    height: 50vh;
    }
  }
  @media(max-width: 280px){
    .mobiltitle{
    font-size: 24px;
    width: 90%;
    margin-top: 140px;
    }
    .banBgCol{
    width: 80%;
    z-index: 9;
    margin-top: 140px;
    height: 30vh;
    }
  }
}
</style>
