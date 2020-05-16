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

const LOADING_IMAGE = "images/loading.gif";
const IMG_WEBSITES = "url('images/cogwheel (1).png')";
const IMG_GRAPHICS = "url('images/cogwheel (1).png')";

// The main HTML Element and the template
const main = document.querySelector("#references-wrapper");
const template = document.querySelector("#template-references").content;
// The menu
const menu = document.getElementById("buttons-wrapper");
const allLink = document.querySelector("#all");
// The googleSheet link
const link =
  "https://spreadsheets.google.com/feeds/list/1o1okTGFAMCRxodaTFQbERyFNYnITnpmdGpbW62YnBCU/od6/public/values?alt=json";

// function to fetch the movies list
// from Google Sheets
function loadJSON(link) {
  fetch(link)
    .then((e) => e.json())
    .then((data) => data.feed.entry.forEach(displayReferencesData));
}
function displayReferencesData(data) {
  const clone = template.cloneNode("true");
  clone.querySelector(".title").textContent = data.gsx$name.$t;
  clone.querySelector(".description").textContent = data.gsx$description.$t;
  const img = data.gsx$image.$t;
  clone
    .querySelector(".card-img")
    .setAttribute("src", "../images/" + img + ".jpg");
  main.appendChild(clone);
}
loadJSON(link);
