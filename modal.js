function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData > input");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");

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

// Validate fist name and last name
function validateName(name) {
  let array = Array.from(formData)
  let res = array.map(item => {return item.value})
  if (array[i].type === "text") {
      if (res[i] === "") {
        throw new Error (`Veuillez renseigner votre ${array[i].name}`)
      }
      if (res[i].length < 2) {
        console.log("Nom trop court")
        throw new Error (`Le ${array[i].name} doit contenir au moins 2 caractères`)
      }
    }
}

// validate email
function validateEmail(email) {
  let array = Array.from(formData)
  let res = array.map(item => {return item.value})
  if (array[i].type === "email") {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegExp.test(res[i])) {
      throw new Error (`Veuillez renseigner un ${array[i].name} valide`)
    }
  }
}

// validate date
function validateDate(date) {
  let array = Array.from(formData)
  let res = array.map(item => {return item.value})
  if (array[i].type === "date") {
    // console.log(res[i])
    let dateRegExp = new RegExp("\\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])")
    if (!dateRegExp.test(res[i])) {
      throw new Error (`Veuillez renseigner votre date de naissance au format jj/mm/aaaa`)
    }
  }
}

// Validate number of tournament
function validateTounament(number) {
  let array = Array.from(formData)
  let res = array.map(item => {return item.value})
  if (array[i].type === "number") {
    // console.log(res[i])
    if (!parseInt(res[i]) && res[i]!== "0") {
      throw new Error (`Veuillez renseigner un nombre entier`)
    }
  }
}

// Validate radio button
function validateRadio(radio) {
  let listeBtnRadios = document.querySelectorAll('input[type="radio"]')
  let selectedRadio;
  for (let listeBtnRadio of listeBtnRadios) {
    if (listeBtnRadio.checked) {
      selectedRadio = listeBtnRadio.checked;
      console.log(selectedRadio)
    } 
  }
  if (selectedRadio !== true) {
    throw new Error (`Vous devez choisir une ville`)
  }
}

//   let array = Array.from(formData)
//   let res = array.map(item => {return item.value})
//   let radioChecked = ""
//   if (array[i].type === "radio") {
//     // console.log(array[i].checked)
//     if (array[i].checked === true) {
//       radioChecked = array[i].checked
//       // console.log(array[i].checked)
//       console.log(radioChecked) 
//     }
//     if (radioChecked !== true) {
//       throw new Error (`Veuillez renseigner un lieu`)
//     } 
//   }
// }

// validate condition
function validateCondition(condition) {
  // let array = Array.from(formData)
  // let res = array.map(item => {return item.value})
  let read = document.getElementById("checkbox1")
  // console.log(read.checked)
  if (!read.checked) {
    throw new Error (`Veuillez lire et accepter les conditions d'utilisation`)  
  }
}

// Display error message
function displayErrorMessage(message) {
    
  let spanErrorMessage = document.getElementById("errorMessage")

  if (!spanErrorMessage) {
      let submitError = document.querySelector(".btn-submit")
      spanErrorMessage = document.createElement("span")
      spanErrorMessage.id = "errorMessage"
      
      submitError.append(spanErrorMessage)

      window.confirm(message)
  }
  
  spanErrorMessage.innerText = message
}

// Validate form
function validateForm(field){
  validateName(field)
  validateEmail(field)
  validateDate(field)
  validateTounament(field)
  validateRadio(field)
  validateCondition(field)
  displayErrorMessage("")
}

// Confirmation
function confirmation(firstName) {
  window.confirm(`Merci ${firstName} de ton inscription`)
  closeModal()
}

// Cheacking modal
form.addEventListener("submit", (e) => {
  try {
    e.preventDefault()
    // console.log(formData)
    let array = Array.from(formData)
    let res = array.map(item => {return item.value})
    // console.log(res)
    for (i = 0; i < res.length; i++) {
      // console.log(res[i])
      // console.log(array[i])
      // console.log(array[i].type)
      validateForm(res)  
    }
    confirmation(res[0])
  } 
  catch (error) {
    displayErrorMessage(error.message)
  }   
});