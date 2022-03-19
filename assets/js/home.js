$(document).ready(function () {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    if (this.scrollY > 1) {
      $('.scroll-up-btn').addClass("show"); 
    } else {
      $('.scroll-up-btn').removeClass("show"); 
    }
  })

  var typed = new Typed(".typing", {
    strings: ["Youtuber", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  })
  var typed2 = new Typed(".typing-2", {
    strings: ["Youtuber", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  })

  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  })

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.navbar i').toggleClass("active");
  })

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
})