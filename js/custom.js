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

  $(".info_btn_box .info_btn>a").on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index();
    $(".info_table_wrap .info_left_table")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
    $(this).addClass("on").siblings().removeClass("on");
  });
});
