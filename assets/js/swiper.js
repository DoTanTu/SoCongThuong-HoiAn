var swiper = new Swiper(".news_banner", {
    
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".activities_banner", {
    slidesPerView: 3,
    spaceBetween: 2,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });