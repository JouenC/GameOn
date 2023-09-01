// error

// Display error message
function displayErrorMessage(message, input) {
  // let spanErrorMessage = document.getElementById("errorMessage");
  let spanErrorMessage = document.createElement("span");
  spanErrorMessage.className = "errorMessage";

  let submitError = document.querySelector(`.formData#${input.id}`);
  spanErrorMessage.id = "errorMessage";

  submitError.append(spanErrorMessage);
  submitError.style.border = "2px; red";

  let errorStyle = document.getElementById("errorMessage");
  let textControl = document.querySelector(".text-control");

  // Message's style
  errorStyle.style.cssText = `
      font-size: 70%;
      color: red
      `;
  textControl.style.cssText = `
      border: red solid
      `;
  // Message's text
  spanErrorMessage.innerText = message;
}

const cleanUp = () => {
  let errorStyle = document.getElementById("errorMessage");
  if (errorStyle) {
    errorStyle.remove();
  }
};
