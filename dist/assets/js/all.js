"use strict";

var swiper1 = new Swiper('.swiper1', {
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1'
  }
});
var swiper2 = new Swiper('.swiper2', {
  // slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1.5
    },
    576: {
      slidesPerView: 2.5
    },
    769: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  },
  // loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2'
  }
});
var swiper3 = new Swiper('.swiper3', {
  // slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    380: {
      slidesPerView: 1.5
    },
    480: {
      slidesPerView: 2
    },
    769: {
      slidesPerView: 2.5
    },
    992: {
      slidesPerView: 3
    }
  },
  // loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
$(document).ready(function () {
  $(".carousel__inner img").click(function () {
    $(".carousel__item--active img").attr("src", $(this).attr('src'));
    return false;
  });
});
$(document).ready(function () {
  $('#datepick').datepicker();
});
//# sourceMappingURL=all.js.map
