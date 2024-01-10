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

  // $(".main_link .link_box a").on("click", function (e) {
  //   e.preventDefault();
  //   const idx = $(this).index();
  //   $(this).addClass("on").siblings().removeClass("on");
  //   eq(idx).show().siblings().hide();
  // });

  const tabBtn = $(".info_btn_box .info_btn");
  const tabCont = $(".info_table_wrap table");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function (e) {
    e.preventDefault();
    const index = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");
    tabCont.eq(index).show().siblings().hide();
  });

  var secondSwiper = new Swiper(".main_best_slide .second-swiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,

    navigation: {
      prevEl: ".swiper-button-pp",
      nextEl: ".swiper-button-nn",
    },

  });
});
