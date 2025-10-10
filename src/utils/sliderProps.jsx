import Swiper from "swiper";
// ...existing code...
import {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";

// Define the interleaveOffset variable that was missing
const interleaveOffset = 0.5;

export const sliderProps = {
  mainSliderSelector: {
    modules: [Autoplay, Navigation, Parallax],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 9000,
    },
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress,
            innerOffset = swiper.width * interleaveOffset,
            innerTranslate = slideProgress * innerOffset;
          const slideElement = swiper.slides[i].querySelector(".slide");
          if (slideElement) {
            slideElement.style.transform = "translateX(" + innerTranslate + "px)";
          }
        }
      },
      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          const slideElement = swiper.slides[i].querySelector(".slide");
          if (slideElement) {
            slideElement.style.transition = speed + "ms";
          }
        }
      },
    },
  },
  gpGridCarousel: {
    modules: [],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: false,
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  },
  gpTestimonialsCarousel: {
    modules: [Pagination],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  },
  gpInstaCarousel: {
    modules: [],
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: false,
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  },
  gpHistory: {
    modules: [Pagination, Scrollbar, Navigation],
    slidesPerView: 1,
    spaceBetween: 70,
    loop: false,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
};
