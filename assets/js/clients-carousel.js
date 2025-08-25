const swiper = new swiper('.clients-swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 }
  }
});
