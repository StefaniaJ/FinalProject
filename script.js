"use strict";

// Navigation
// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector(".overlay-menu");

menuIcon.addEventListener("click", () => {
  if (nav.style.transform != "translateX(-10%)") {
    nav.style.transform = "translateX(-10%)";
    nav.style.transition = "transform 0.2s ease-out";
  } else {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
  }
});

// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector(".menuIcon");

toggleIcon.addEventListener("click", () => {
  if (toggleIcon.className != "menuIcon toggle") {
    toggleIcon.className += " toggle";
  } else {
    toggleIcon.className = "menuIcon";
  }
});

// Close the mobile menu when you click a menu item
let mobileClose = document.querySelector("#menu-mobile");
mobileClose.addEventListener("click", function () {
  if (nav.style.transform != "translateX(-10%)") {
    nav.style.transform = "translateX(-10%)";
    nav.style.transition = "transform 0.2s ease-out";
  } else {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
  }

  if (toggleIcon.className != "menuIcon toggle") {
    toggleIcon.className += " toggle";
  } else {
    toggleIcon.className = "menuIcon";
  }
});

// When you scroll down 20px from the top of the page,you can see the button(built-in JavaScript's event  )
window.onscroll = function () {
  scroll();
};

function scroll() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("Btn-top").style.display = "block";
  } else {
    document.getElementById("Btn-top").style.display = "none";
  }
}

// When you click on the button,you will see the top of the page
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// ///////////////////////////////////////////////////////////////

// Home page - Testimonial slider
// Inspiration: https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/

let controls = document.querySelectorAll(".controls");
for (let i = 0; i < controls.length; i++) {
  controls[i].style.display = "inline-block";
}

let sliderTestimonial = document.querySelectorAll(
  "#slider-wrapper-testimonial .slide-testimonial"
);
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 115000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  sliderTestimonial[currentSlide].className = "slide-testimonial";
  currentSlide = (n + sliderTestimonial.length) % sliderTestimonial.length;
  sliderTestimonial[currentSlide].className = "slide-testimonial showing";
}

let next = document.getElementById("next");
let previous = document.getElementById("previous");

next.onclick = function () {
  nextSlide();
};
previous.onclick = function () {
  previousSlide();
};

// Home page - Price slider
// Inspiration: https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/

let controlsPrice = document.querySelectorAll(".controls-price");
for (let i = 0; i < controlsPrice.length; i++) {
  controlsPrice[i].style.display = "inline-block";
}

let sliderPrice = document.querySelectorAll(
  "#slider-wrapper-price .slide-price"
);
let currentSlidePrice = 0;
let slideIntervalPrice = setInterval(nextSlidePrice, 5000);

function nextSlidePrice() {
  goToSlidePrice(currentSlidePrice + 1);
}

function previousSlidePrice() {
  goToSlidePrice(currentSlidePrice - 1);
}

function goToSlidePrice(n) {
  sliderPrice[currentSlidePrice].className = "slide-price";
  currentSlidePrice = (n + sliderPrice.length) % sliderPrice.length;
  sliderPrice[currentSlidePrice].className = "slide-price showing-price";
}

let nextPrice = document.getElementById("next-price");
let previousPrice = document.getElementById("previous-price");

nextPrice.onclick = function () {
  nextSlidePrice();
};
previousPrice.onclick = function () {
  previousSlidePrice();
};

//  /////////////////////

// fetch("https://crunchdatabase-8fb6.restdb.io/rest/userscontactinfo", {
//   method: "get",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//     "x-apikey": "5ecaa66f4a532801892ed711",
//     "cache-control": "no-cache",
//   },
// })
//   .then((e) => e.json())
//   .then((e) => console.log(e));

// const form = document.querySelector("form");

// const data = {
//   name: form.elements.name.value,
//   email: form.elements.email.value,
//   phone: form.elements.phone.value,
//   message: form.elements.message.value,
// };

// const postData = JSON.stringify(data);
// fetch("https://crunchdatabase-8fb6.restdb.io/rest/userscontactinfo", {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//     "x-apikey": "5ecaa66f4a532801892ed711",
//     "cache-control": "no-cache",
//   },
//   body: postData,
// })
//   .then((e) => e.json())
//   .then((data) => console.log(data));
