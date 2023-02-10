const mainbanner = document.querySelector(".main-banner .swiper");
const prdList1 = document.querySelector(".prd-list1 .swiper");
const prdList2 = document.querySelector(".prd-list2 .swiper");

new Swiper(mainbanner, {
  slidesPerView: 1,
  autoplay: true,
  loop: true,
  navigation: {
    // 버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(prdList1, {
  slidesPerView: 4,
  spaceBetween: 18,
  navigation: {
    // 버튼
    nextEl: ".prd-list1 .swiper-buttons .swiper-button-next",
    prevEl: ".prd-list1 .swiper-buttons .swiper-button-prev",
  },
});

new Swiper(prdList2, {
  slidesPerView: 4,
  spaceBetween: 18,
  navigation: {
    // 버튼
    nextEl: ".prd-list2 .swiper-buttons .swiper-button-next",
    prevEl: ".prd-list2 .swiper-buttons .swiper-button-prev",
  },
});
