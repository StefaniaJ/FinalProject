window.addEventListener("DOMContentLoaded", start);

// References page
const main = document.querySelector("#references-wrapper");
const loadingDiv = document.querySelector("#loading-div");
const template = document.querySelector("#template-references").content;
const menu = document.getElementById("buttons-wrapper");
const allLink = document.querySelector("#all");
const websitesLink = document.querySelector("#websites");
const graphicsLink = document.querySelector("#graphics");
const article = document.querySelector(".link-btn");
const LOADING_IMAGE = "images/loading.gif";
const link =
  "https://spreadsheets.google.com/feeds/list/1Vzl0-Sl0Dr6MCb7fVf9L5azOK9U-ENq57yrIidGFBVg/od6/public/values?alt=json";

// Fetch data from Google Sheets as JSON for Crunch Website

// function to fetch the references list

// Create the Loading Indicator
let loadingIndicator = "";
createLoadingIndicator();

function start() {
  loadJSON(link);
  setLoading();
}

function loadJSON(link) {
  setLoading();

  fetch(link)
    .then((e) => e.json())
    .then((data) => data.feed.entry.forEach(showData));

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
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
  clone.querySelector(".link-btn").href = data.gsx$url.$t;
  clone.querySelector(".link-card").href = data.gsx$url.$t;

  if (data.gsx$url.$t == "notdone.html") {
    clone.querySelector(".link-card").style.cursor = "not-allowed";
    clone.querySelector(".middle button").style.cursor = "not-allowed";
    clone.querySelector(".link-btn").style.cursor = "not-allowed";
  }
  main.appendChild(clone);
}

// Filter Websites
websitesLink.addEventListener("click", () => {
  main.innerHTML = "";
  loadingDiv.innerHTML = "";
  createLoadingIndicator();
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
  loadingDiv.innerHTML = "";
  createLoadingIndicator();
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
  loadingDiv.innerHTML = "";
  createLoadingIndicator();
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
  loadingDiv.appendChild(createImage);
  // Get a reference to the loading indidator
  loadingIndicator = document.getElementById("loading");
}
