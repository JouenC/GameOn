// error

// Display error message
function displayErrorMessage(message, input) {

  let spanErrorMessage = document.createElement("span");
  spanErrorMessage.className = "errorMessage";

  let submitError

  if (input.id === "location") {
    submitError = input
    submitError.after(spanErrorMessage)
  } else {
    submitError = document.querySelector(`.formData > #${input.id}`)
    submitError.after(spanErrorMessage)
    submitError.style.border = "2px solid red"
  }

  spanErrorMessage.id = "errorMessage"
  
  if (`${input.id}` === "checkbox1") {
    let read = document.querySelector(".btn-submit")
    read.before(spanErrorMessage)
  }

  let errorStyle = document.getElementById("errorMessage")

  // Message's style
  errorStyle.style.cssText = `
    font-size: 70%;
    color: red;
    `
    
  // Message's text
  spanErrorMessage.innerText = message
}

const cleanUp = () => {
  let errorStyle = document.getElementById("errorMessage");
  if (errorStyle) {
    errorStyle.remove()
  }
  const inputs = document.querySelectorAll("input")
  Array.from(inputs).forEach((item) => (item.style.border = "none"))
}
  