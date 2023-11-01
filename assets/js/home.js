(function () {
  emailjs.init("tsyGZQz0IDnfZwF3T");
})();

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 1) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  var typed = new Typed(".typing", {
    strings: ["Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed2 = new Typed(".typing-2", {
    strings: ["Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".navbar i").toggleClass("active");
  });
  $(".navbar .menu a").click(function () {
    $(".navbar .menu").removeClass("active");
    $(".navbar i").removeClass("active");
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
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

  AOS.init();

  function showToast({ message, duartion } = { message: "", duartion: 3000 }) {
    Toastify({
      text: message,
      duration: duartion,
      // destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background:
          "linear-gradient(to right, rgb(150, 20, 60), rgb(220, 20, 60))",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }

  function isValidEmail(email) {
    // Regular expression to match a valid email address
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  }

  $("#sendSignal").click(function () {
    const name = $("#name").val();
    const email = $("#email").val();
    const subject = $("#subject").val();
    const message = $("#message").val();
    const params = {
      name,
      email,
      subject,
      message,
    };
    const serviceId = "service_1y78cso";
    const templateId = "template_5uql7xc";

    const isFillFull = Object.keys(params).every((key) => params[key]);
    if (!isFillFull) {
      showToast({
        message: "Please complete all fields",
      });
      return;
    }
    if (!isValidEmail(email)) {
      showToast({
        message: "Please fill valid email",
      });
      return;
    }
    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        $("#name").val("");
        $("#email").val("");
        $("#subject").val("");
        $("#message").val("");
        showToast({
          message: "Thank you for your email!",
          duartion: 5000,
        });
      })
      .catch((error) => {
        console.log(error);
        showToast({
          message:
            "Sorry, your message could not be delivered. Please try again later",
        });
      });
  });
});
