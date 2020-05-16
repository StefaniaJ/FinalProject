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

// References page

// Fetch data from  Google Sheets as JSON for Crunch Website

// Strings Constants

const LOADING_IMAGE = "images/loading.gif";
const IMG_WEBSITES = "url('images/cogwheel (1).png')";
const IMG_GRAPHICS = "url('images/cogwheel (1).png')";

// The googleSheet link
const GOOGLE_SHEET =
  "https://spreadsheets.google.com/feeds/list/2PACX-1vRNdrohwhE1eU2-r6haOTKxhQPu9mJ89H-KM08YAgDPDwqVqj7BLNwS4ic2d2V3FX3XF8sgWJdBcv9U/od6/public/values?alt=json";

// The main HTML Element and the template
const main = document.querySelector(".main-references");
const template = document.querySelector("#template-references").content;

// The menu
const menu = document.getElementById("buttons-wrapper");

// Run this function with 1 second delay
// adds-removes the active class on the menu items
setTimeout(function runDelay() {
  const items = menu.querySelectorAll("div");

  // Initialize the active class on the first menu item
  items[0].classList.add("active");

  // Loop through the buttons and add the active class to the current/clicked button
  for (let i = 0; i < items.length; i++) {
    // desktop menu
    items[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += "active";
    });
  }
}, 1000);
