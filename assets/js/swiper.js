var swiperNews = new Swiper(".news_banner", {
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  autoplay: {
      delay: 5000, 
      disableOnInteraction: false,
  },
});

var swiperActivities = new Swiper(".activities_banner", {
  slidesPerView: 3,
  spaceBetween: 2,
  freeMode: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
  },
});
