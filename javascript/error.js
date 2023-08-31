// error

// Display error message
function displayErrorMessage(message) {
    
    let spanErrorMessage = document.getElementById("errorMessage")
  
    if (!spanErrorMessage) {
        let submitError = document.querySelector(".formData")
        spanErrorMessage = document.createElement("span")
        spanErrorMessage.id = "errorMessage"
        
        submitError.append(spanErrorMessage)
        submitError.style.border = "2px; red"
    }
    let errorStyle = document.getElementById("errorMessage")
    let textControl = document.querySelector(".text-control")
  
    // Message's style
    errorStyle.style.cssText = `
      font-size: 70%;
      color: red
      `
    textControl.style.cssText = `
      border: red solid
      `
    // Message's text
    spanErrorMessage.innerText = message
  }
  