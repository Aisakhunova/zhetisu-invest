<template>
  <section id="section-slider">
    <div class="row-3 p-2 d-flex justify-content-around" id="navbar">
      <img src="../images/jetisu1.svg" alt="" />
      <div class="nav-buttons justify-content-between">
        <button class="btn me-5">Каталог</button>
        <button class="btn me-5">Блог</button>
        <button class="btn">Контакты</button>
      </div>
      <div class="nav-svgs justify-content-between">
        <img class="me-3" src="../images/search.svg" alt="" />
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
        <img src="../images/card1.svg" alt="" class="flex-shrink-0" />
        <div class="title">Индустриальные инновации</div>
        <p>
          Откройте мир передовых технологий и инженерных решений. Инвестируйте в
          проекты, которые изменят промышленность и сделают ваш бизнес ключевым
          игроком на мировой арене.
        </p>
        <button class="btn">Подробнее</button>
      </div>
      <div class="catalog-card w-50">
        <img src="../images/card2.svg" alt="" />
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
        <img src="../images/card3.svg" alt="" />
        <div class="title">Высокотехнологичные производства</div>
        <p>
          Производство будущего начинается здесь. "Zhetysu Invest" предлагает
          инвестиционные возможности в создание и развитие высокотехнологичных
          производств, где инновации становятся двигателем прогресса.
        </p>
        <button class="btn">Подробнее</button>
      </div>
      <div class="catalog-card w-50">
        <img src="../images/card4.svg" alt="" />
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
        <img src="../images/card5.svg" alt="" />
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
        <img src="../images/news1.svg" alt="" class="img-fluid" />
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
        <img src="../images/news2.svg" alt="" class="img-fluid" />
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
        <img src="../images/news3.svg" alt="" class="col-2 img-fluid" />
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
        <img src="../images/news4.svg" alt="" class="col-2 img-fluid" />
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
        <img src="../images/news5.svg" alt="" class="col-2 img-fluid" />
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
    <img src="../images/questions.svg" alt="" />
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
import "./HomePage.css";

export default defineComponent({
  components: {
    EconomicsSliderVue,
    MainSliderVue,
  },
});
</script>
