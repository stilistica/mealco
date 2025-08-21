import Swiper from 'swiper';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

const btnPrev = document.querySelector('.swiper-button-prev');
const btnNext = document.querySelector('.swiper-button-next');
const canSeeSwiper = document.querySelector('.swiper-can-see');

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 23,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    resizeObserver: true,
    slidesPerView: 1.2,
    breakpoints: {
      1440: { slidesPerView: 3, spaceBetween: 37 },
    },

    modules: [Pagination, Navigation, Keyboard],
  });

  function updateButtonSlider() {
    btnPrev.toggleAttribute('disabled', swiper.isBeginning);
    btnNext.toggleAttribute('disabled', swiper.isEnd);
    canSeeSwiper.classList.toggle('margin-swiper', swiper.isEnd);
  }
  swiper.on('slideChange', updateButtonSlider);
  updateButtonSlider();
});
