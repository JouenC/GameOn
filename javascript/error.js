// error

// Display error message
function displayErrorMessage(message, input) {

  // Create span for error message and class/Id
  let spanErrorMessage = document.createElement("span")
  spanErrorMessage.className = "errorMessage"
  spanErrorMessage.id = "errorMessage"
  let submitError

  // Clip error message after the last location
  if (input.id === "location") {
    submitError = input
    submitError.after(spanErrorMessage)
  } 
  
  // Create error border and clip error message under the error field
  else {
    submitError = document.querySelector(`.formData > #${input.id}`)
    submitError.after(spanErrorMessage)
    submitError.style.border = "2px solid red"
  }

  // Clip error condition of use on submit button
  if (`${input.id}` === "checkbox1") {
    let read = document.querySelector(".btn-submit")
    read.before(spanErrorMessage)
  }

  // Message's style
  let errorStyle = document.getElementById("errorMessage")
  errorStyle.style.cssText = `
    font-size: 70%;
    color: red;
    `
    
  // Message's text
  spanErrorMessage.innerText = message
}

// Clean error message
const cleanUp = () => {
  let errorStyle = document.getElementById("errorMessage");
  if (errorStyle) {
    errorStyle.remove()
  }

  // Clear error border
  const inputs = document.querySelectorAll("input")
  Array.from(inputs).forEach((item) => (item.style.border = "none"))
}
  