<template>
  <div class="slider">
    <!-- Стрелки в левом верхнем углу -->

    <!-- Слайды -->
    <div class="slides">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide d-flex"
        v-show="index === currentIndex"
      >
        <div class="slider-text col-5">
          <div class="slide-title">{{ slide.title }}</div>
          <div class="slide-content">{{ slide.content }}</div>
          <button class="slide-btn"><div>Подробнее</div></button>
        </div>
        <img
          :src="require(`@/images/${slide.image}`)"
          alt="src-image"
          class="img-fluid col-6"
        />
      </div>
    </div>

    <!-- Пагинация внизу слева -->
    <div class="pagination">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: index === currentIndex }"
        class="pagination-item"
      ></span>
    </div>

    <!-- Стрелки в правом нижнем углу -->
  </div>
</template>

<script>
import "./MainSlider.css";

export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          title: "ZHETISU INVEST",
          content:
            "создание наиболее благоприятных условий для развития и внедрения инноваций",
          image: "main-slider1.svg",
        },
        {
          id: 2,
          title: "Инновации и чистые технологии",
          content:
            '"Zhetysu Invest" посвящено развитию инноваций и внедрению экологически чистых технологий. Мы поддерживаем инициативы, способствующие устойчивому развитию и ответственному использованию ресурсов.',
          image: "main-slider1.svg",
        },
        {
          id: 3,
          title: "Инновации и чистые технологии",
          content:
            '"Zhetysu Invest" посвящено развитию инноваций и внедрению экологически чистых технологий. Мы поддерживаем инициативы, способствующие устойчивому развитию и ответственному использованию ресурсов.',
          image: "main-slider1.svg",
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>
