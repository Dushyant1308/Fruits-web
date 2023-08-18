//--------Aos-Script--------

AOS.init({
  duration: 1000,
  offset: 100,
});

//--------Navbar-Start-------------




//-- Initialize Swiper -----

var swiper = new Swiper(".mySwiper", {});


// $(document).ready(function () {
//     $( "#color" ).click(function() {
//         $( "#color" ).css({
//             'color': '#88b121',
//         });
//       });
// });

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//-------------Section-3-Start--------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next_1",
    prevEl: ".swiper-button-prev_1",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

//-------------Section-3-End--------

//-------------Section-4-Start--------

//-- Initialize Swiper --

var swiper = new Swiper(".mySwiper_4", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next_4",
    prevEl: ".swiper-button-prev_4",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

//-------------Section-4-End--------

//-------------Section-5-Start--------

//-- Initialize Swiper --

var swiper = new Swiper(".mySwiper_5", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next_5",
    prevEl: ".swiper-button-prev_5",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

//-------------Section-5-End--------

//-------------Section-6-Start--------


var swiper = new Swiper(".mySwiper_6", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//-------------Section-6-End--------

//-------------Section-7-Start--------

//-- Initialize Swiper ----

var swiper = new Swiper(".mySwiper_7", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next_7",
    prevEl: ".swiper-button-prev_7",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiper_8", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    399: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 50,
    },
  },
});

     //-------------Section-7-End--------

