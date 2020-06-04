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
let mobileClose = document.querySelector(".mobile-menu-wrapper");
mobileClose.addEventListener("click", function () {
  if (navigation.style.transform != "translateX(-10%)") {
    navigation.style.transform = "translateX(-10%)";
    navigation.style.transition = "transform 0.2s ease-out";
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

const form = document.querySelector("#form");

// When the user scrolls the page, execute myFunction
// Inspiration: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
