"use strict";

window.addEventListener("DOMContentLoaded", start);

// References page

// const LOADING_IMAGE = "images/loading.gif";
const main = document.querySelector("#references-wrapper");
const template = document.querySelector("#template-references").content;
const menu = document.getElementById("buttons-wrapper");
const allLink = document.querySelector("#all");
const websitesLink = document.querySelector("#websites");
const graphicsLink = document.querySelector("#graphics");
const link =
  "https://spreadsheets.google.com/feeds/list/1o1okTGFAMCRxodaTFQbERyFNYnITnpmdGpbW62YnBCU/od6/public/values?alt=json";

// Fetch data from Google Sheets as JSON for Crunch Website

// function to fetch the references list

function start() {}
loadJSON(link);

function loadJSON(link) {
  fetch(link)
    .then((e) => e.json())
    .then((data) => data.feed.entry.forEach(showData));
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
}

function showData(data) {
  const clone = template.cloneNode("true");
  console.log(data);
  clone.querySelector(".name").textContent = data.gsx$name.$t;
  // clone.querySelector(".description").textContent = data.gsx$description.$t;
  const img = data.gsx$image.$t;
  let imgM = clone
    .querySelector(".card-img")
    .setAttribute("src", "../images/" + img);
  clone.querySelector(".card-img").setAttribute("src", "../images/" + img);

  let all_links = document.querySelectorAll(".card a");

  if (data.gsx$category.$t == "websites") {
    clone.querySelector(".link-btn").textContent = "See website";
    clone.querySelector(".link-btn").href = data.gsx$url.$t;
    clone.querySelector(".link-card").href = data.gsx$url.$t;
  }

  if (data.gsx$category.$t != "websites") {
    clone.querySelector(".link-btn").textContent = "Zoom in";
    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img

    // for (var i = 0; i < all_links.length; i++) {
    //   all_links[i].removeAttribute("href");
    // }
  }

  main.appendChild(clone);
}
// loadJSON(link);

// Filter Websites
websitesLink.addEventListener("click", () => {
  main.innerHTML = "";
  fetch(link)
    .then((e) => e.json())
    .then((data) =>
      data.feed.entry
        .filter((data) => data.gsx$category.$t == "websites")
        .forEach(showData)
    );
});

// Filter Graphics
graphicsLink.addEventListener("click", () => {
  main.innerHTML = "";
  fetch(link)
    .then((e) => e.json())
    .then((data) =>
      data.feed.entry
        .filter((data) => data.gsx$category.$t == "graphics")
        .forEach(showData)
    );
});

allLink.addEventListener("click", () => {
  main.innerHTML = "";
  loadJSON(link);
});

// Add active class to the current button (highlight it)
const items = menu.querySelectorAll(".btn");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

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
