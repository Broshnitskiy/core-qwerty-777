const swiper = new Swiper('.swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      slidesOffsetBefore: 15,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 2.2,
      slidesOffsetBefore: 15,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3.2,
      slidesOffsetBefore: 15,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 4.4,
      slidesOffsetBefore: 80,
      spaceBetween: 10,
    },

    1440: {
      slidesPerView: 4.8,
      spaceBetween: 17,
      slidesOffsetBefore: 95,
    },
  },

  navigation: {
    nextEl: '.next-element',
    prevEl: '.prev-element',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
