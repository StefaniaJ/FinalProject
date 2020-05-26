"use strict";

// Navigation
// Responsive Toggle Navigation (used in previous projects)
let menuIconWrapper = document.querySelector(".menu-icon-wrapper");
let navigation = document.querySelector(".mobile-menu-wrapper");

menuIconWrapper.addEventListener("click", () => {
  if (navigation.style.transform != "translateX(-10%)") {
    navigation.style.transform = "translateX(-10%)";
    navigation.style.transition = "transform 0.2s ease-out";
  } else {
    navigation.style.transform = "translateX(-100%)";
    navigation.style.transition = "transform 0.2s ease-out";
  }
});

// Toggle Menu Icon
let toggleIcon = document.querySelector(".menu-icon-wrapper");

toggleIcon.addEventListener("click", () => {
  if (toggleIcon.className != "menu-icon-wrapper toggle") {
    toggleIcon.className += " toggle";
  } else {
    toggleIcon.className = "menu-icon-wrapper";
  }
});

// Close the mobile menu when you click a menu item
let mobileClose = document.querySelector(".mobile-menu-wrapper ul");
mobileClose.addEventListener("click", function () {
  if (navigation.style.transform != "translateX(-10%)") {
    navigation.style.transform = "translateX(-10%)";
    navigation.style.transition = "transform 0.2s ease-out";
  } else {
    navigation.style.transform = "translateX(-100%)";
    navigation.style.transition = "transform 0.2s ease-out";
  }

  if (toggleIcon.className != "menuIconWrapper toggle") {
    toggleIcon.className += " toggle";
  } else {
    toggleIcon.className = "menuIconWrapper";
  }
});

// Loop through all dropdown buttons to toggle between hiding and showing its dropdown content
// Inspiration: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_dropdown
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// When you scroll down 20px from the top of the page,you can see the button (used in previous projects)
// Inspiration: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
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

let controlsPrice = document.querySelectorAll(".price-wrapper");
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

let nextPrice = document.getElementById("see-next-price");
let previousPrice = document.getElementById("see-previous-price");

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
