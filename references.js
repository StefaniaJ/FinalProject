window.addEventListener("DOMContentLoaded", start);

// References page
const main = document.querySelector("#references-wrapper");
const template = document.querySelector("#template-references").content;
const menu = document.getElementById("buttons-wrapper");
const allLink = document.querySelector("#all");
const websitesLink = document.querySelector("#websites");
const graphicsLink = document.querySelector("#graphics");
const LOADING_IMAGE = "images/loading.gif";
const link =
  "https://spreadsheets.google.com/feeds/list/1o1okTGFAMCRxodaTFQbERyFNYnITnpmdGpbW62YnBCU/od6/public/values?alt=json";

// Fetch data from Google Sheets as JSON for Crunch Website

// function to fetch the references list

function start() {
  loadJSON(link);
  setLoading();
}

function loadJSON(link) {
  fetch(link)
    .then((e) => e.json())
    .then((data) => data.feed.entry.forEach(showData));
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
}

function showData(data) {
  // hide the loading image
  hideLoading();

  const clone = template.cloneNode("true");
  console.log(data);
  clone.querySelector(".name").textContent = data.gsx$name.$t;
  // clone.querySelector(".description").textContent = data.gsx$description.$t;
  const img = data.gsx$image.$t;
  clone.querySelector(".card-img").setAttribute("src", "images/" + img);

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
loadJSON(link);

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

// Create the Loading Indicator
let loadingIndicator = "";
createLoadingIndicator();

// function to display the loading image
function setLoading() {
  loadingIndicator.style.display = "block";
}

// Function to Hide Loading Indicator / Show title
function hideLoading() {
  // Hide the Loading Indicator
  loadingIndicator.style.display = "none";
}

// function to create the loadingIndicator
function createLoadingIndicator() {
  // Create the Loading Indicator
  let createImage = document.createElement("img");
  createImage.setAttribute("id", "loading");
  createImage.src = LOADING_IMAGE;
  main.appendChild(createImage);
  // Get a reference to the loading indidator
  loadingIndicator = document.getElementById("loading");
}
