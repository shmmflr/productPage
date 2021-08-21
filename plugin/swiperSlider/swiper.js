// swiper js
const swiper = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

swiper = new Swiper(profile_images, {
  slidesPerView: 6,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  observer: true,
});
