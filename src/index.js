// JS Goes here - ES6 supported

import "./css/main.css";

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 40,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
