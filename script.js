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
  //  else {
  //   navigation.style.transform = "translateX(-100%)";
  //   navigation.style.transition = "transform 0.2s ease-out";
  // }

  // if (toggleIcon.className != "menuIconWrapper toggle") {
  //   toggleIcon.className += " toggle";
  // } else {
  //   toggleIcon.className = "menuIconWrapper";
  // }
});

// Loop through all dropdown buttons to toggle between hiding and showing its dropdown content
// Inspiration: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_dropdown
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  // let value = navigation.innerHTML;
  // console.log(value);
  // if (value.indexOf("Services") !== -1) {
  //   break;
  // }

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

// let controls = document.querySelectorAll(".controls");
// for (let i = 0; i < controls.length; i++) {
//   controls[i].style.display = "inline-block";
// }

// let sliderTestimonial = document.querySelectorAll(
//   "#slider-wrapper-testimonial .slide-testimonial"
// );
// let currentSlide = 0;
// let slideInterval = setInterval(nextSlide, 115000);

// function nextSlide() {
//   goToSlide(currentSlide + 1);
// }

// function previousSlide() {
//   goToSlide(currentSlide - 1);
// }

// function goToSlide(n) {
//   sliderTestimonial[currentSlide].className = "slide-testimonial";
//   currentSlide = (n + sliderTestimonial.length) % sliderTestimonial.length;
//   sliderTestimonial[currentSlide].className = "slide-testimonial showing";
// }

// let next = document.getElementById("next");
// let previous = document.getElementById("previous");

// next.onclick = function () {
//   nextSlide();
// };
// previous.onclick = function () {
//   previousSlide();
// };

// Home page - Price slider
// Inspiration: https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/

// let controlsPrice = document.querySelectorAll(".price-wrapper");
// for (let i = 0; i < controlsPrice.length; i++) {
//   controlsPrice[i].style.display = "inline-block";
// }

// let sliderPrice = document.querySelectorAll(
//   "#slider-wrapper-price .slide-price"
// );
// let currentSlidePrice = 0;
// let slideIntervalPrice = setInterval(nextSlidePrice, 5000);

// function nextSlidePrice() {
//   goToSlidePrice(currentSlidePrice + 1);
// }

// function previousSlidePrice() {
//   goToSlidePrice(currentSlidePrice - 1);
// }

// function goToSlidePrice(n) {
//   sliderPrice[currentSlidePrice].className = "slide-price";
//   currentSlidePrice = (n + sliderPrice.length) % sliderPrice.length;
//   sliderPrice[currentSlidePrice].className = "slide-price showing-price";
// }

// let nextPrice = document.getElementById("see-next-price");
// let previousPrice = document.getElementById("see-previous-price");

// nextPrice.onclick = function () {
//   nextSlidePrice();
// };
// previousPrice.onclick = function () {
//   previousSlidePrice();
// };

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

const submitBtn = document.querySelector("#submit-form-btn");
const form = document.querySelector("#form");

// Invalidates input and attaches new event listeners
function invalidateInput(
  input,
  inputForm,
  errorMessage,
  inputPattern = null,
  inputErrorMessage = null,
  initializing = false
) {
  function focusEventHandler() {
    restoreInput(input, inputForm);
  }

  if (!initializing) {
    // On initialization we don't need any styling, just attaching events
    appendError(inputForm, errorMessage);

    input.style.backgroundPositionX = "96%";
    input.style.backgroundPositionY = "50%";
    input.style.borderColor = "red";
    input.style.marginBottom = "5px";
    input.style.backgroundSize = "20px 20px";
    input.style.backgroundRepeat = "no-repeat";
    input.style.backgroundImage = "url(images/exclamation-mark.png)";
  } else {
    input.addEventListener("focus", focusEventHandler); // Add on focus event only on initialization
  }

  function inputEventListenerHandler() {
    if (this.value.length > 0) {
      if (inputPattern && inputPattern.test(input.value))
        validateInput(input, inputForm);
      // If input passed regex test then validating it
      else if (inputPattern && !inputPattern.test(input.value))
        invalidateInput(
          input,
          inputForm,
          inputErrorMessage,
          inputPattern,
          inputErrorMessage
        );
      // Invalidating input if it didn't pass regex test
      else if (!inputPattern) validateInput(input, inputForm); // If no regex test has to be done simply validating input
    } else restoreInput(input, inputForm); // If input has no symbols inside restoring it's default look
  }

  input.removeEventListener("focusout", inputEventListenerHandler); // Clearing out event listener's input event just to make sure nothing stacks
  input.addEventListener("focusout", inputEventListenerHandler); // Adding new input's event listener
}
// Applies validation passed styles to input, removes error div
function validateInput(input, inputForm) {
  removeError(inputForm);

  input.style.backgroundPositionX = "96%";
  input.style.backgroundPositionY = "50%";
  input.style.borderColor = "#15a32b";
  input.style.backgroundSize = "20px 20px";
  input.style.backgroundRepeat = "no-repeat";
  input.style.setProperty(
    "background-image",
    "url(images/verified.png)",
    "important"
  );
}

// Restores input to it's default look
function restoreInput(input, inputForm) {
  removeError(inputForm);

  input.style.borderColor = "#deddd9";
  input.style.backgroundRepeat = "no-repeat";
  input.style.backgroundImage = "";
}

// Appends error div to input's wrapper
function appendError(item, errorMessage) {
  removeError(item);

  const errorDiv = document.createElement("DIV");
  errorDiv.className = "errorDiv";
  errorDiv.style.color = "red";
  errorDiv.style.width = "90%";
  errorDiv.style["text-align"] = "left";
  errorDiv.style.margin = "auto";
  errorDiv.style.marginBottom = "1.2em";

  errorDiv.innerHTML = errorMessage;
  item.appendChild(errorDiv);
}

// Removes error's div from input's wrapper
function removeError(item) {
  const errorDiv = item.getElementsByClassName("errorDiv")[0];
  if (errorDiv) {
    errorDiv.innerHTML = "";
    errorDiv.style.height = "0px";
    item.removeChild(errorDiv);
  }
}

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,4}$/;

// Attaching on input events form each
function initializeFormEvents() {
  invalidateInput(
    document.getElementById("name"),
    document.getElementById("name-group"),
    "Name field is required",
    null,
    null,
    true
  );
  invalidateInput(
    document.getElementById("email"),
    document.getElementById("email-group"),
    "Email field is required",
    emailPattern,
    "Please enter valid email",
    true
  );
  invalidateInput(
    document.getElementById("phone"),
    document.getElementById("phone-group"),
    "Phone field is required",
    phonePattern,
    "Please enter valid phone number",
    true
  );
  invalidateInput(
    document.getElementById("message"),
    document.getElementById("message-group"),
    "Message field is required",
    null,
    null,
    true
  );
}

submitBtn.addEventListener("click", () => {
  const data = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    message: document.querySelector("#message").value,
  };

  let validationPassed = true;

  if (!data.name) {
    invalidateInput(
      document.getElementById("name"),
      document.getElementById("name-group"),
      "Name field is required"
    );
    validationPassed = false;
  }
  if (!data.email) {
    invalidateInput(
      document.getElementById("email"),
      document.getElementById("email-group"),
      "Email field is required",
      emailPattern,
      "Please enter valid email"
    );
    validationPassed = false;
  } else if (!emailPattern.test(data.email)) {
    invalidateInput(
      document.getElementById("email"),
      document.getElementById("email-group"),
      "Please enter valid email",
      emailPattern,
      "Please enter valid email"
    );
    validationPassed = false;
  }
  if (!data.phone) {
    invalidateInput(
      document.getElementById("phone"),
      document.getElementById("phone-group"),
      "Phone field is required",
      phonePattern,
      "Please enter valid phone number"
    );
    validationPassed = false;
  } else if (!phonePattern.test(data.phone)) {
    invalidateInput(
      document.getElementById("phone"),
      document.getElementById("phone-group"),
      "Please enter valid phone number",
      phonePattern,
      "Please enter valid phone number"
    );
    validationPassed = false;
  }
  if (!data.message) {
    invalidateInput(
      document.getElementById("message"),
      document.getElementById("message-group"),
      "Message field is required"
    );
    validationPassed = false;
  }

  if (!validationPassed) return;

  console.log("Validation passed");
  const postData = JSON.stringify(data);
  console.log(data);
  fetch("https://crunchdatabase-8fb6.restdb.io/rest/userscontactinfo", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5ecaa66f4a532801892ed711",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((e) => {
      return e.json();
    })
    .then((data) => {
      window.location.href = "index.html";
      console.log(data);
    })
    .catch((i) => {
      console.log(i);
    });
});
