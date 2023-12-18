<template>
  <section id="section-slider">
    <div class="row-3 p-2 d-flex justify-content-around" id="navbar">
      <img src="../images/jetisu1.png" alt="" />
      <div class="nav-buttons justify-content-between">
        <button class="btn me-5">Каталог</button>
        <button class="btn me-5">Блог</button>
        <button class="btn">Контакты</button>
      </div>
      <div class="nav-svgs justify-content-between">
        <img class="me-3" src="../images/search.png" alt="" />
        <img class="me-3" src="../images/cart.svg" alt="" />
        <button class="btn">Войти</button>
      </div>
    </div>
    <div class="slider-place">
      <MainSliderVue />
    </div>
  </section>
  <section id="section-catalog">
    <div class="catalog-text d-flex justify-content-between flex-column">
      <div class="title">Каталог</div>
      <p>
        Добро пожаловать в каталог "Zhetysu Invest" – вашего надежного партнера
        в создании инновационного будущего. Наш каталог предлагает широкий
        спектр инвестиционных возможностей, специально подобранных для поддержки
        проектов, направленных на глобальную конкурентоспособность и
        устойчивость.
      </p>
    </div>
    <div class="catalog-part d-flex align-items-start">
      <div class="catalog-card w-50">
        <img src="../images/card1.png" alt="" class="flex-shrink-0" />
        <div class="title">Индустриальные инновации</div>
        <p>
          Откройте мир передовых технологий и инженерных решений. Инвестируйте в
          проекты, которые изменят промышленность и сделают ваш бизнес ключевым
          игроком на мировой арене.
        </p>
        <button class="btn">Подробнее</button>
      </div>
      <div class="catalog-card w-50">
        <img src="../images/card2.png" alt="" />
        <div class="title">Зеленые технологии</div>
        <p>
          Способствуйте эко-революции! В этом разделе вы найдете инновационные
          проекты, направленные на создание экологически чистых технологий,
          способных улучшить состояние окружающей среды и поддержать вашу
          компанию на пути к устойчивому развитию.
        </p>
        <button class="btn">Подробнее</button>
      </div>
    </div>
    <div class="catalog-part width-100 d-flex align-items-start">
      <div class="catalog-card w-50">
        <img src="../images/card3.png" alt="" />
        <div class="title">Высокотехнологичные производства</div>
        <p>
          Производство будущего начинается здесь. "Zhetysu Invest" предлагает
          инвестиционные возможности в создание и развитие высокотехнологичных
          производств, где инновации становятся двигателем прогресса.
        </p>
        <button class="btn">Подробнее</button>
      </div>
      <div class="catalog-card w-50">
        <img src="../images/card4.png" alt="" />
        <div class="title">Социальные инициативы</div>
        <p>
          Вкладывайте в проекты, способные изменить жизнь людей к лучшему. Наши
          социальные инициативы направлены на поддержку образования,
          здравоохранения и других сфер, влияющих на качество жизни.
        </p>
        <button class="btn">Подробнее</button>
      </div>
    </div>
    <div class="catalog-part width-100 d-flex align-items-start">
      <div class="catalog-card w-50 h-100">
        <img src="../images/card5.png" alt="" />
        <div class="title">Недвижимость</div>
        <p>
          Оставайтесь водителями своего инвестиционного пути. Воспользуйтесь
          функцией интерактивного выбора, чтобы настроить свой портфель
          инвестиций и выбрать проекты, соответствующие вашим стратегическим
          целям.
        </p>
        <button class="btn">Подробнее</button>
      </div>
    </div>
  </section>
  <section id="section-economics">
    <div class="title">Экономика региона</div>
    <EconomicsSliderVue />
  </section>
  <section id="section-news">
    <div class="row title">Новости</div>
    <div class="news-part1">
      <div class="news-card col-7">
        <img src="../images/news1.png" alt="" class="img-fluid" />
        <div class="news-title">
          Область Жетысу в лидерах по темпам экономического роста
        </div>
        <div class="news-p">
          За 10 месяцев текущего года темпы роста экономики области Жетысу
          составили 112,9%. Это один из самых высоких показателей по республике.
          Об этом сообщил сегодня аким области Бейбит Исабаев в ходе брифинга на
          площадке СЦК при Президенте РК
        </div>
        <div class="news-time">1 час назад</div>
      </div>
      <div class="news-card col-5">
        <img src="../images/news2.png" alt="" class="img-fluid" />
        <div class="news-title">
          Область Жетысу в лидерах по темпам экономического роста
        </div>
        <div class="news-p">
          За 10 месяцев текущего года темпы роста экономики области Жетысу
          составили 112,9%. Это один из самых высоких показателей по республике.
          Об этом сообщил сегодня аким области Бейбит Исабаев в ходе брифинга на
          площадке СЦК при Президенте РК
        </div>
        <div class="news-time">1 час назад</div>
      </div>
    </div>
    <div class="news-part2 d-flex">
      <div class="news-message col-4">
        <img src="../images/news3.png" alt="" class="col-2 img-fluid" />
        <div class="news-messsage-text">
          <div class="news-message-title">
            Cотрудники ТОО “Zhetysu invest LTD” посетили 17-ю Центрально –
            Азиатскую Международную выставку «Сельское хозяйство» - AgroWorld
            Qazaqstan 2023
          </div>
          <div class="news-message-p">01.12.2023</div>
        </div>
      </div>
      <div class="news-message col-4">
        <img src="../images/news4.png" alt="" class="col-2 img-fluid" />
        <div class="news-messsage-text">
          <div class="news-message-title">
            Сотрудники ТОО "Zhetysu Invest LTD" провели семинар для
            непосредственного ответа на актуальные вопросы предпринимателей, а
            также перечень услуг, выполняемых компанией.
          </div>
          <div class="news-message-p">30.11.2023</div>
        </div>
      </div>
      <div class="news-message col-4">
        <img src="../images/news5.png" alt="" class="col-2 img-fluid" />
        <div class="news-messsage-text">
          <div class="news-message-title">
            ТОО "Zhetysu Invest LTD" приняло участие в казахстанско-чешском
            бизнес-форуме, направленном на углубления двустороннего
            сотрудничества в г.Астана.
          </div>
          <div class="news-message-p">21.11.2023</div>
        </div>
      </div>
    </div>
    <button><div class="btn-text">Все новости</div></button>
  </section>
  <section id="section-questions">
    <div class="blue1">
      <div class="questions">
        <div class="questions-title">Остались вопросы?</div>
        <div class="questions-subtitle">
          Оставьте свои контакты и мы свяжемся с вами
        </div>
        <input type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="+7 (...) ... - .. - ." />
        <button>Отправить</button>
      </div>
    </div>
    <div class="blue2"></div>
    <div class="blue3"></div>
    <img src="../images/questions.png" alt="" />
  </section>
  <footer id="footer">
    <div class="footer1">
      <div class="footer-zhetisu">Жетысу инвест</div>
      <div class="footer-number">8 (777) 2452456</div>
      <div class="footer-text">
        <div>Физический адрес</div>
        <div>mail@mail.ru</div>
      </div>
    </div>
    <div class="footer2">
      <div class="footer-text">
        <div>Каталог</div>
        <div>Блог</div>
        <div>Частые вопросы</div>
      </div>
    </div>
    <div class=""></div>
    <div class="footer3">
      <div>Хотите узнавать первым? Подпишитесь на рассылку.</div>
      <form action="/submit" class="d-flex">
        <input type="text" id="name" name="mail" placeholder="Почта" />
        <button type="submit"><div>Отправить</div></button>
      </form>
      <div class="svgs">
        <img src="../images/footer1.svg" alt="" />
        <img src="../images/footer2.svg" alt="" />
        <img src="../images/footer3.svg" alt="" />
      </div>
    </div>
    <div class="end-text">© 2023 все права защищены</div>
  </footer>
</template>

<script>
import EconomicsSliderVue from "./EconomicsSlider.vue";
import MainSliderVue from "./MainSlider.vue";
import { defineComponent } from "vue";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    EconomicsSliderVue,
    MainSliderVue,
  },
});
</script>

<style>
#section-slider {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
section {
  width: 100vw; /* Fix the typo here */
  overflow: hidden;
}
#navbar {
  background-color: #f5f8ff;
}
#section-slider .slider-place {
  display: flex;
  padding: 100px 135px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
}

#section-catalog {
  display: flex;
  padding: 120px 135px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
}

#section-catalog .catalog-text {
  width: 670px;
  height: 200px;
}
.title {
  color: var(--Main-text, #262626);

  /* Header 2 */
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 125% */
}

p {
  color: var(--Main-text, #262626);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
}

#section-catalog .catalog-part {
  gap: 30px;
}
#section-catalog .catalog-card {
  display: flex;
  padding: 40px;
  height: 476px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  border-radius: 12px;
  border: 1px solid var(--3, #c9def1);
  background: var(--White, #fff);
}

#section-catalog .catalog-card .title {
  color: #000;
  font-size: 24px;
  line-height: 30px; /* 125% */
}

#section-catalog .catalog-card p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  color: #000;

  font-family: Inter;
}

#section-catalog .catalog-card button {
  border-radius: 8px;
  background: var(--2, #577ea4);
}

#section-economics {
  display: flex;
  padding: 120px 135px;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
}

#section-news {
  display: flex;
  padding: 0px 135px 160px 135px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

#section-news .news-part1 {
  display: flex;
  justify-content: space-between;
}
#section-news .news-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

#section-news .news-title {
  color: var(--Main-text, #262626);

  /* Header 3 */
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 109.091% */
}

#section-news .news-p {
  color: var(--, #7e7e7e);

  /* Body text */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}

#section-news .news-time {
  color: var(--, #7e7e7e);

  /* Body small */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
}
#section-news .news-part2 img {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

#section-news .news-message {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
#section-news .news-messsage-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}
#section-news .news-message-title {
  color: var(--Main-text, #262626);

  /* Header 4 */
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
}
#section-news .news-message-p {
  color: var(--, #7e7e7e);

  /* Body small */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
}

#section-news button,
#section-questions button {
  display: flex;
  padding: 16px 24px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 24px;
  background: #ffd748;
}

#section-news .btn-text {
  color: var(--Main-text, #262626);

  /* button text */
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
}

#section-questions {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

#section-questions .blue1 {
  width: 1002px;
  height: 417px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--2, #577ea4);
  position: absolute;
  margin-top: 20px;
  margin-right: 5%;
  z-index: 3;
  display: flex;
  align-items: center;
}
#section-questions .blue2 {
  position: absolute;
  margin-right: 73%;
  width: 121px;
  height: 367px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--3, #c9def1);
  z-index: 2;
}
#section-questions .blue3 {
  position: absolute;
  width: 105px;
  height: 317px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #ebf9fe;
  margin-right: 80%;
  z-index: 1;
}
#section-questions img {
  position: absolute;
  margin-left: 55%;
  margin-bottom: 12%;
  z-index: 4;
}

#section-questions .questions {
  margin-left: 80px;
  display: flex;
  width: 499px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  z-index: 10;
}

#section-questions .questions-title {
  color: var(--White, #fff);

  /* Header 2 */
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 125% */
}

#section-questions .questions-subtitle {
  color: var(--White, #fff);
  font-feature-settings: "dlig" on;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.36px;
}
#section-questions input {
  display: flex;
  width: 470px;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: var(--White, #fff);
}
#footer {
  width: 100vw;
  overflow: hidden;
  padding: 120px 135px;
  background: var(--Main-text, #262626);
  color: white;
  display: flex;
  justify-content: space-between;
}

#footer .footer1 {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

#footer .footer-zhetisu {
  color: var(--White, #fff);
  font-feature-settings: "dlig" on;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 26.4px */
}
#footer .footer-number {
  color: var(--White, #fff);
  font-feature-settings: "liga" off;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

#footer .footer-text {
  color: var(--White, #fff);
  font-feature-settings: "liga" off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
#footer form {
  align-items: center;
  gap: 10px;
}
#footer input {
  display: flex;
  width: 268px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid var(--White, #fff);
  background-color: transparent;
}
#footer button {
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--Main-text, #262626);
  font-feature-settings: "dlig" on;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

#footer .svgs {
  display: inline-flex;
  align-items: center;
  gap: 20px;
}

#footer .footer3 {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
#footer .end-text {
  color: white;
}
</style>
