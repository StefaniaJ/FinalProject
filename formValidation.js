const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,4}$/;

const verifiedForms = {};

// Applies validation passed styles to input, removes error div
function validateInput(input) {
  removeError(input.parentElement);

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

  verifiedForms[input.parentElement.parentElement.id][input.name] = true;
}

// Restores input to it's default look
function restoreInput(input) {
  removeError(input.parentElement);

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

function invalidateInput(input, errorMessage = "Something went wrong") {
  appendError(input.parentElement, errorMessage);

  input.style.backgroundPositionX = "96%";
  input.style.backgroundPositionY = "50%";
  input.style.borderColor = "red";
  input.style.marginBottom = "5px";
  input.style.backgroundSize = "20px 20px";
  input.style.backgroundRepeat = "no-repeat";
  input.style.backgroundImage = "url(images/exclamation-mark.png)";
}

function attachEventListeners(input, errorMessage, inputPattern = null) {
  console.log(input.parentElement);

  function inputFocusOutEventHandler() {
    if (this.value.length > 0) {
      if (inputPattern && inputPattern.test(input.value)) validateInput(input);
      // If input passed regex test then validating it
      else if (inputPattern && !inputPattern.test(input.value)) {
        let patternErrorMessage = "Field is incorrect";
        switch (input.name) {
          case "email":
            patternErrorMessage = "Please enter valid email";
            break;
          case "phone":
            patternErrorMessage = "Please enter valid phone number";
            break;
        }

        invalidateInput(input, patternErrorMessage);
      }
      // Invalidating input if it didn't pass regex test
      else if (!inputPattern) validateInput(input); // If no regex test has to be done simply validating input
    } else restoreInput(input); // If input has no symbols inside restoring it's default look
  }

  input.addEventListener("focus", () => restoreInput(input)); // Add on focus event only on initialization
  input.addEventListener("focusout", inputFocusOutEventHandler);
}

function submitButtonHandler(button, inputs) {
  button.addEventListener("click", function (e) {
    console.log("button clicked");
    const data = {};
    let validationPassed = true;

    for (const input of inputs) {
      data[input.name] = input.value;
      let errorMessage = "Something went wrong";
      let currentPattern = null;

      if (input.value.length < 1) {
        switch (input.name) {
          case "name":
            errorMessage = "Name field is required";
            break;
          case "email":
            errorMessage = "Email field is required";
            currentPattern = emailPattern;
            break;
          case "phone":
            errorMessage = "Phone field is required";
            currentPattern = phonePattern;
            break;
          case "message":
            errorMessage = "Message field is required";
            break;
        }

        validationPassed = false;

        invalidateInput(input, errorMessage);
      } else if (
        verifiedForms[button.parentElement.id] &&
        !verifiedForms[button.parentElement.id][input.name]
      )
        validationPassed = false;
    }

    if (!validationPassed) return; // Do not submit form if any of inputs has styling of invalid input

    document.querySelector(".loading-btn").style.display = "inline-block";

    const postData = JSON.stringify(data);

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
        document.querySelector(".loading-btn").style.display = "none";
        return e.json();
      })
      .then((data) => {
        document.querySelector(".loading-btn").style.display = "none";

        button.parentElement.style.display = "none";
        document.querySelector(".hide").style.display = "block";

        console.log(data);
      })
      .catch((i) => {
        document.querySelector(".loading-btn").style.display = "none";
        console.log(i);
      });
  });
}

function validateForm(formId) {
  const inputs = document.getElementById(formId).getElementsByTagName("input");
  const submitButton = document
    .getElementById(formId)
    .getElementsByTagName("button")[0];

  for (const input of inputs) {
    if (!verifiedForms[formId]) verifiedForms[formId] = {};

    verifiedForms[formId][input.name] = false;

    let errorMessage = "Something went wrong";
    let currentPattern = null;
    switch (input.name) {
      case "name":
        errorMessage = "Name field is required";
        break;
      case "email":
        errorMessage = "Email field is required";
        currentPattern = emailPattern;
        break;
      case "phone":
        errorMessage = "Phone field is required";
        currentPattern = phonePattern;
        break;
      case "message":
        errorMessage = "Message field is required";
        break;
    }

    attachEventListeners(input, errorMessage, currentPattern);
  }

  submitButtonHandler(submitButton, inputs);
}
