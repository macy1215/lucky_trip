<template>
  <div class="position-relative">
    <div class="container-lg">
      <div class="h-100 position-absolute
                  d-flex justify-content-center
                  align-items-md-center
                  pe-4 banTitle
                  align-items-start">
          <h2 class="h2 fw-bold text-wrap text-md-start pe-5
          text-white d-md-block d-none text-dark">
            一起前進台灣的每一個角落<br>
            美好回憶由你創造
          </h2>
          <h2 class="fw-bold text-wrap text-md-center pe-md-5 pe-0 text-white
          d-md-none text-start mobiltitle">
            好嗨遊與你一起輕鬆走！
          </h2>
      </div>
      <img src="@/assets/images/personback2.png"
              class="position-absolute bottom-0 end-0 w-25 pe-4
              d-md-block d-none" style="z-index:10;" alt="旅行者">
      </div>
      <div class="bg-primary bg-gradient bg-opacity-50
          position-absolute pe-5 banBgCol"
          ></div>
    <swiper-banner></swiper-banner>
  </div>
   <div class="container">
    <div class="section mt-5 pt-4 justify-content-between">
      <h2 class="h2 text-primary fw-bold">好嗨遊推薦</h2>
      <p class="text-wrap w-md-50 mx-auto px-md-0 px-4 lh-base mt-3">
        想在台灣旅遊，你又多了一種選擇！<br>
        好嗨遊了解你跟團不自由的感覺，也了解你自由行查資料的辛苦。
        好嗨遊讓您用最優惠的價格玩到最豐富的行程！</p>
      <button type="button" class="btn btn-primary text-white px-4">前往探索</button>
    </div>
    <div class="section mt-5 pt-4 justify-content-between">
      <h3 class="h3 text-primary fw-bold">焦點話題</h3>
      <div class="mt-3 row px-md-0 px-4">
        <div class="card col-md-4 col-sm-12">
        <img src="@/assets/images/taitung.png" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            範例範例範例
          </p>
          <a href="#" class="btn btn-primary">點我看行程</a>
        </div>
        </div>
      </div>
    </div>
    <div class="section mt-5 pt-4 pb-4 justify-content-between">
      <h2 class="h2 text-primary fw-bold">我猜你想找...</h2>
      <ul class="d-md-flex justify-content-around mt-3 align-middle">
        <li class="circleBox circletxt1 my-0px mx-auto ">
          <img src="@/assets/images/circle-walk.png" alt="" class="circleImg ">
        </li>
        <li class="circleBox  circletxt2 my-0px mx-auto ">
          <img src="@/assets/images/circle-food.png" alt="" class="circleImg">
        </li>
        <li class="circleBox  circletxt3 my-0px mx-auto ">
          <img src="@/assets/images/circle-family.png" alt="" class="circleImg">
        </li>
        <li class="circleBox  circletxt4 my-0px mx-auto ">
          <img src="@/assets/images/circle-culture.png" alt="" class="circleImg">
        </li>
        <li class="circleBox  circletxt5 my-0px mx-auto ">
          <img src="@/assets/images/circle-nature.png" alt="" class="circleImg">
        </li>
      </ul>
    </div>
   </div>
   <div class="bg-primary w-auto bg-opacity-10 mt-md-5 py-md-3">
    <div class="container my-5 py-4">
      <div class="row align-items-md-center py-3 px-md-0 px-2 position-relative">
        <div class="col-md col-12">
          <h2 class="text-wrap activeTitle text-md-start fw-bold " style="z-index:10;">
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
   <footer-banner></footer-banner>
</template>

<script>
import SwiperBanner from '../../components/SwiperBanner.vue';
import FooterBanner from '../../components/FooterBanner.vue';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      recommend: [],
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
          console.log(this.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    SwiperBanner,
    FooterBanner,
  },
};
</script>

<style scoped>
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
  .circleBox::before {
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
  }

   .circleBox:hover::before {
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
  }

  .circletxt1:hover::before {
    content: '雙腳萬能';
    font-size: 30px;
    font-weight: bold;
  }

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
  }
  .activeTitle{
    font-size: 40px;
    line-height:1.6em;
  }
  .activebox{
    margin-left: -100px;
  }
  @media(max-width: 767px){
  /*產品手機*/
  ul{
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
  }
  .activebox {
    margin-top: 24px;
    margin-left: 0px;
}
}
</style>
