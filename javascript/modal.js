function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// Cheacking modal
form.addEventListener("submit", (e) => {
  let element = null;
  try {
    e.preventDefault();
    // console.log(formData)
    let array = Array.from(formData);
    array.forEach((input) => {
      element = input;
      validateForm(input);
    });
    // console.log(res)
    // for (i = 0; i < res.length; i++) {
    //   // console.log(res[i])
    //   // console.log(array[i])
    //   // console.log(array[i].type)
    // validateForm(res)
    // }
    confirmation(res[0]);
  } catch (error) {
    displayErrorMessage(error.message, element);
  }
});
