$(function () {
  const swiper = new Swiper(".main_slide_wrap", {
    spaceBetween: 30,
    effect: "fade",

    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-n",
      prevEl: ".swiper-button-p",
    },

    autoplay: {
      disableOnInteraction: false,
    },
  });
});
