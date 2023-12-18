<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item d-flex justify-content-between">
        <div class="slider-text">
          <div class="slider-title">{{ slide.title }}</div>
          <div class="slider-p">{{ slide.content }}</div>
          <button><div>Подробнее</div></button>
        </div>
        <div class="col-6">
          <img src="../images/slide1.png" alt="" class="img-fluid" />
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
// import { ref } from "vue";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          title: "ZHETISU INVEST",
          content:
            "создание наиболее благоприятных условий для развития и внедрения инноваций",
          imgsrc: "../images/slide1.png",
        },
        {
          id: 2,
          title: "Инновации и чистые технологии",
          content:
            '"Zhetysu Invest" посвящено развитию инноваций и внедрению экологически чистых технологий. Мы поддерживаем инициативы, способствующие устойчивому развитию и ответственному использованию ресурсов.',
          imgsrc: "../images/slide2.png",
        },
      ],
      currentIndex: 0,
    };
  },
});
</script>

<style>
.carousel {
  position: relative;
  overflow: hidden;
}
.carousel__item {
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel__prev,
.carousel__next {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--2, #577ea4);
  position: absolute;
  margin-top: 0;
}

.slider-title {
  color: var(--Main-text, #262626);
  font-feature-settings: "dlig" on;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px; /* 108.333% */
  text-align: left;
}
.slider-p {
  color: var(--Main-text, #262626);
  font-feature-settings: "dlig" on;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 160% */
  letter-spacing: 0.4px;
  margin: 0;
  text-align: left;
}
.slider-text button {
  display: flex;
  padding: 16px 24px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 24px;
  background: #ffd748;
  color: var(--Main-text, #262626);
  border: none;

  /* button text */
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
}

.slider-text {
  display: flex;
  width: 570px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  text-align: left;
}
</style>
