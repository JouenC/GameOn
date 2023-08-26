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

// Validate form
form.addEventListener("submit", (e) => {
  e.preventDefault()
  // console.log(formData)
  const array = Array.from(formData)
  const res = array.map(item => {return item.value})
  // console.log(res)
  for (i = 0; i < res.length; i++) {
    // console.log(res[i])
    // console.log(array[i])
    // console.log(array[i].type)
    validateName(res)
  }
});