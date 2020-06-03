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
