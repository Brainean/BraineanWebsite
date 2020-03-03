$(function () {
  "use strict";

  //===== Mobile Menu 

  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass('active');
  });

  $(".navbar-nav a").on('click', function () {
    $(".navbar-toggler").removeClass('active');
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200)
    } else {
      $('.back-to-top').fadeOut(200)
    }
  });

  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
  });

  $("#button").click(function () {
    $("#button").addClass("onclic", 250, validate);
  });

  function validate() {
    setTimeout(function () {
      $("#button").removeClass("onclic");
      $("#button").addClass("validate", 450, callback);
    }, 2250);
  }

  function callback() {
    setTimeout(function () {
      $("#button").removeClass("validate");
    }, 1250);
  }

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  var nodeArray = [
    document.querySelector('.header-content'),
    document.querySelector('.mouse-scroll'),
    document.querySelector('.section-title'),
    document.querySelector('.features'),
    document.querySelector('.about-image'),
    document.querySelector('.service-head'),
    document.querySelector('.single-service'),
    document.querySelector('.call-action-image'),
    document.querySelector('.call-action-content'),
    document.querySelector('.team-header'),
    document.querySelector('.swiper-wrapper'),
    document.querySelector('#contact'),
    document.querySelector('.contact-img')
  ];
  ScrollReveal().reveal(nodeArray, {
    delay: 500,
    duration: 250
  });
});