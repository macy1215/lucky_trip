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
            <button type="button" class="my-md-3 my-1 btn btn-primary text-white btn-lg fw-bold">
              探索行程
            </button>
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
        <button type="button" class="btn btn-primary text-white px-4">前往探索</button>
      </RouterLink>
  </div>
  <div class="mt-5 pt-4 justify-content-between container px-5">
    <h3 class="h3 text-primary fw-bold">焦點話題</h3>
    <div class="row pt-3 px-1 d-md-flex mx-auto justify-content-center">
        <div class="card col-md-3 col-12 p-0 mb-md-0 mb-4 border-0 me-4 shadow"
        v-for="product in products.slice(-3)" :key="product+123">
        <RouterLink :to="`/product/${product.id}`" >
          <img class="img-fluid border-0 rounded-top " :src="product.imageUrl" :alt="product">
        </RouterLink>
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
        </div>
    </div>
  </div>

  </div>

  <div class="container mt-5 pt-4 pb-4 justify-content-between">
      <h2 class="h2 text-primary fw-bold">我猜你想找...</h2>
      <ul class="d-md-flex justify-content-around mt-3 align-middle">
        <li class="circleBox circletxt1 my-0px mx-auto ">
          <RouterLink :to="`/products?category=文化探索`">
            <img src="@/assets/images/circle-walk.png" alt="" class="circleImg ">
          </RouterLink>
        </li>
        <li class="circleBox  circletxt2 my-0px mx-auto ">
          <RouterLink :to="`/products?category=美食之旅`">
            <img src="@/assets/images/circle-food.png" alt="" class="circleImg">
          </RouterLink>
        </li>
        <li class="circleBox  circletxt3 my-0px mx-auto ">
          <RouterLink :to="`/products?category=親子出遊`">
            <img src="@/assets/images/circle-family.png" alt="" class="circleImg">
          </RouterLink>
        </li>
        <li class="circleBox  circletxt4 my-0px mx-auto ">
          <RouterLink :to="`/products?category=休閒渡假`">
            <img src="@/assets/images/circle-culture.png" alt="" class="circleImg">
          </RouterLink>
        </li>
        <li class="circleBox  circletxt5 my-0px mx-auto ">
          <RouterLink :to="`/products?category=自然景色`">
            <img src="@/assets/images/circle-nature.png" alt="" class="circleImg">
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
.circleBox{
    position: relative;
    width: 160px;
    height: 160px;
    margin: 10px;
    border-radius: 50%;
    overflow: hidden;
}

.circleImg{
    height: 100%;
    display: block;
    object-fit: cover;
  }
  /* .circleBox::before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(6, 61, 34, 0.75);
    width: 100%;
    padding: 100px 0px;
    color: white;
    opacity: 0;
    transition: opacity 0.6s ease;
  } */

   /* .circleBox:hover::before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(6, 61, 34, 0.75);
    width: 100%;
    padding: 100px 0px;
    color: white;
    opacity: 1;
  } */

  /* .circletxt1:hover::before {
    content: '雙腳萬能';
    font-size: 30px;
    font-weight: bold;
  } */
/*

  .circletxt2:hover::before {
    content: '美食饗宴';
    font-size: 30px;
    font-weight: bold;
  }

  .circletxt3:hover::before {
    content: '大小攏來';
    font-size: 30px;
    font-weight: bold;
  }

  .circletxt4:hover::before {
    content: '台灣文化';
    font-size: 30px;
    font-weight: bold;
  }

  .circletxt5:hover::before {
    content: '自然美景';
    font-size: 30px;
    font-weight: bold;
  } */
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
  /* ul{
    padding:0px 36px;
    li{
      height: 160px;
      overflow: hidden;
    }
  }
  .circleBox{
    position: relative;
    margin-top: 28px;
    overflow: hidden;
    width: 100%;
    height: auto;
    border-radius:4%;
  }
  .circleImg{
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius:4%;
  } */
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
