<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide.title">
      <div class="carousel__item d-flex justify-content-between">
        <div class="economics-text col-5">
          <div class="econ-title">{{ slide.title }}</div>
          <div class="econ-p">{{ slide.content }}</div>
        </div>
        <div class="image col-5">
          <img src="../images/econ-slide1.png" alt="" class="img-fluid" />
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
// import { ref } from "vue";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          title: "2018",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/econ-slide1.png",
        },
        {
          title: "2019",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/econ-slide1.png",
        },
        {
          title: "2020",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/econ-slide1.png",
        },
        {
          title: "2021",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/econ-slide1.png",
        },
        {
          title: "2022",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/econ-slide1.png",
        },
        {
          title: "2023",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/econ-slide1.png",
        },
      ],
      currentIndex: 0,
    };
  },
});
</script>

<style>
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.carousel__item {
  min-height: 200px;
  color: var(--vc-clr-white);
  width: 100%;
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

.economics-text {
  display: flex;
  width: 470px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  text-align: left;
}

.econ-title {
  color: #262626;

  font-family: Inter;
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 129.032% */
  text-align: left;
}
.econ-p {
  color: #262626;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  display: flex;
  align-items: start;
  text-align: left;
}

#section-economics {
  overflow: hidden;
  width: 100vw;
}
img {
}
</style>
