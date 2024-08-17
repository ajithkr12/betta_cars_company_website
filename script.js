const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 36,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1800: {
        items: 4,
      },
    },
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.getElementById("navbar");
//   const menu = document.getElementById("main-menu");

//   navbar.addEventListener("click", function () {
//     menu.classList.toggle("active");
//   });

//   // Optional: Close menu when clicking outside
//   document.addEventListener("click", function (event) {
//     if (!navbar.contains(event.target) && !menu.contains(event.target)) {
//       menu.classList.remove("active");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const menu = document.getElementById("main-menu");

  navbar.addEventListener("click", function () {
    menu.classList.toggle("active");

    // Toggle between bars and times
    if (menu.classList.contains("active")) {
      navbar.classList.remove("fa-bars");
      navbar.classList.add("fa-times");
      navbar.classList.add("open");
    } else {
      navbar.classList.remove("fa-times");
      navbar.classList.add("fa-bars");
      navbar.classList.remove("open");
    }
  });

  // Optional: Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("active");
      navbar.classList.remove("fa-times");
      navbar.classList.add("fa-bars");
      navbar.classList.remove("open");
    }
  });
});

(function ($) {
  "use strict";

  $(document).ready(function () {
    "use strict";

    //Scroll back to top

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
