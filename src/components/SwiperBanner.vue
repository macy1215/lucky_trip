<template>
     <div>
        <swiper
        :spaceBetween="50"
        :centeredSlides="true"
        :autoplay="{
            delay: 4500,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
        >
            <swiper-slide class="banner-bg banner-img1 img-fluid"></swiper-slide>
            <swiper-slide class="banner-bg banner-img2 img-fluid"></swiper-slide>
            <swiper-slide class="banner-bg banner-img3 img-fluid"></swiper-slide>
        </swiper>
    </div>
  </template>
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import '@/assets/scss/helper/swiper.css';
import '@/assets/scss/helper/_swiper.scss';

// import required modules
import { Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
