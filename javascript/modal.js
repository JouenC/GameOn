function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// Launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none"
}

// Close modal event
closeBtn.addEventListener("click", closeModal)

// Cheacking modal during click on submit button
form.addEventListener("submit", (e) => {

  let element = null

  // Cancel the operation of the submit button and create an array containing all the nodes
  try {
    e.preventDefault()
    let array = Array.from(formData)
    let res = document.getElementById("first")

    // Filter the table to remove the checkboxs location
    const final = array.filter((item) => !item.id.startsWith("location"))

    // Remove the last checkbox which is not obligatory
    final.pop()

    // Add checkboxs location in table then look for errors
    const finalElementList = [...final, locationFormData]
    finalElementList.forEach((input) => {
      element = input
      validateForm(input)
    })

    // If no error, send a confirmation message containing the first name
    confirmation(res.value)

  // If error, send error message
  } catch (error) {
    displayErrorMessage(error.message, element)
  }
})