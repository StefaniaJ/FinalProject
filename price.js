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
