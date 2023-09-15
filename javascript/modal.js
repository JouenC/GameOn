function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// close modal form
function closeModal() {
  modalbg.style.display = "none"
}

// close modal event
closeBtn.addEventListener("click", closeModal)

// Cheacking modal
form.addEventListener("submit", (e) => {
  let element = null;
  try {
    e.preventDefault()
    let array = Array.from(formData)
    let res = document.getElementById("first")
    const final = array.filter((item) => !item.id.startsWith("location"))
    final.pop()
    const finalElementList = [...final, locationFormData]
    finalElementList.forEach((input) => {
      element = input
      validateForm(input)
    })

    confirmation(res.value)
  } catch (error) {
    displayErrorMessage(error.message, element)
  }
})