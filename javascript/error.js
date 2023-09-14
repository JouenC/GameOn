// error

// Display error message
function displayErrorMessage(message, input) {
  // let spanErrorMessage = document.getElementById("errorMessage");
  let spanErrorMessage = document.createElement("span");
  spanErrorMessage.className = "errorMessage";
  let submitError;

  if (input.id === "location") {
    submitError = input;
  } else {
    submitError = document.querySelector(`.formData > #${input.id}`);
  }

  spanErrorMessage.id = "errorMessage";

  console.log(`${input.id}`);

  // let errorStyle = document.getElementById("errorMessage")
  if (input.id === "checkbox1") {
    let read = document.querySelector(".btn-submit");
    read.before(spanErrorMessage);
  } else {
    submitError.after(spanErrorMessage);
    if (input.id !== "location") submitError.style.border = "2px solid red";
  }

  // if (`${input.id}` === "location1") {
  //   let location = document.querySelector(".text-label");
  //   location.after(spanErrorMessage);
  // }

  // if (!spanErrorMessage) {
  //     let submitError = document.querySelectorAll(".formData")
  //     console.log(submitError)
  //     Array.from(submitError)
  //     spanErrorMessage = document.createElement("span")
  //     spanErrorMessage.id = "errorMessage"

  //     submitError.append(spanErrorMessage)
  //     submitError.style.border = "2px; red"
  // }
  let errorStyle = document.getElementById("errorMessage");
  // let textControl = document.querySelector(".text-control")

  // Message's style
  errorStyle.style.cssText = `
    font-size: 70%;
    color: red;
    `;

  // Message's text
  spanErrorMessage.innerText = message;
}

const cleanUp = () => {
  let errorStyle = document.getElementById("errorMessage");
  if (errorStyle) {
    errorStyle.remove();
  }
  const inputs = document.querySelectorAll("input");
  // [...inputs].forEach((item) => (item.style.border = "none"))
  Array.from(inputs).forEach((item) => (item.style.border = "none"));
};
