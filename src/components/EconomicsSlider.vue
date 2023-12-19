<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide.title">
      <div class="carousel__item d-flex justify-content-between">
        <div class="economics-text col-5">
          <div class="econ-title">{{ slide.title }}</div>
          <div class="econ-p">{{ slide.content }}</div>
        </div>
        <div class="image col-5">
          <img src="../images/economics1.svg" alt="" class="img-fluid" />
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
import "./EconomicsSlider.css";

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
          imgsrc: "../images/economics1.svg",
        },
        {
          title: "2019",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/economics1.svg",
        },
        {
          title: "2020",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/economics1.svg",
        },
        {
          title: "2021",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/economics1.svg",
        },
        {
          title: "2022",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/economics1.svg",
        },
        {
          title: "2023",
          content:
            "Объем строительных работ составил 56,1 млрд. тенге или 93,1% Введено 116,6 тыс. кв. метров жилья или 84,2% к уровню 2021 года. В экономику области привлечено 128,8 млрд. тенге инвестиций с ростом на 6,4%.Во всех отраслях экономики создано 20 342 рабочих мест, в том числе постоянные – 10 335.",
          imgsrc: "../images/economics1.svg",
        },
      ],
      currentIndex: 0,
    };
  },
});
</script>
