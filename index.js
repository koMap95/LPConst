// Import stylesheets
import Swiper from 'swiper';
import './css/style.css';
import './css/swiper.min.css';
import './css/animate.css';

new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.arrow'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    541: {
      slidesPerView: 2,
      spaceBetween: 60
    }
  }
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
});
