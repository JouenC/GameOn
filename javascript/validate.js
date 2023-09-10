// validate

// Validate fist name and last name
function validateName(name) {
  console.log(name);
  if (!name) {
    throw new Error(`Veuillez renseigner votre nom`)
  }
  if (name.length < 2) {
    // console.log("Nom trop court")
    throw new Error(`Cette entrée doit contenir au moins 2 caractères`)
  }
  // let array = Array.from(formData)
  // let res = array.map(item => {return item.value})
  // if (array[i].type === "text") {
  //     if (res[i] === "") {
  //       throw new Error (`Veuillez renseigner votre ${array[i].name}`)
  //     }
  //     if (res[i].length < 2) {
  //       console.log("Nom trop court")
  //       throw new Error (`Le ${array[i].name} doit contenir au moins 2 caractères`)
  //     }
  //   }
}

// validate email
function validateEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
    throw new Error(`Veuillez renseigner un email valide`)
  }

  // let array = Array.from(formData)
  // let res = array.map(item => {return item.value})
  // if (array[i].type === "email") {
  //   let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  //   if (!emailRegExp.test(res[i])) {
  //     throw new Error (`Veuillez renseigner un ${array[i].name} valide`)
  //   }
  // }
}

// validate date
function validateDate(date) {
  let dateRegExp = new RegExp("\\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])")
  if (!dateRegExp.test(date)) {
    throw new Error(`Veuillez renseigner votre date de naissance au format jj/mm/aaaa`)
  }
  // let array = Array.from(formData)
  // let res = array.map((item) => {
  //   return item.value
  // })
  // if (array[i].type === "date") {
  //   // console.log(res[i])
  //   let dateRegExp = new RegExp(
  //     "\\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])"
  //   )
  //   if (!dateRegExp.test(res[i])) {
  //     throw new Error(
  //       `Veuillez renseigner votre date de naissance au format jj/mm/aaaa`
  //     )
  //   }
  // }
}

// Validate number of tournament
function validateTournament(number) {
  if (!parseInt(number) && number !== "0") {
  // if (!parseInt(number) ||  0 > number || number > 100 || number !== "0") {
    throw new Error(`Veuillez renseigner un nombre entier`)
  }
  // let array = Array.from(formData)
  // let res = array.map((item) => {
  //   return item.value
  // });
  // if (array[i].type === "number") {
  //   // console.log(res[i])
  //   if (!parseInt(res[i]) && res[i] !== "0") {
  //     throw new Error(`Veuillez renseigner un nombre entier`)
  //   }
  // }
}

// Validate radio button
function validateRadio(radio) {
  console.log(radio)
  if (radio !== true) {
    throw new Error(`Vous devez choisir une ville`)
  }
  // let listeBtnRadios = document.querySelectorAll('input[type="radio"]')
  // let selectedRadio
  // console.log(listeBtnRadios)
  // for (let listeBtnRadio of listeBtnRadios) {
  //   if (listeBtnRadio.checked) {
  //     selectedRadio = listeBtnRadio.checked
  //     console.log(selectedRadio)
  //     break
  //   }
  // }
  // if (selectedRadio !== true) {
  //   throw new Error(`Vous devez choisir une ville`)
  // }
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
function validateCondition(read) {
  // let array = Array.from(formData)
  // let res = array.map(item => {return item.value})
  // let read = document.getElementById("checkbox1")
  // console.log(read.checked)
  if (read === false) {
    throw new Error(`Veuillez lire et accepter les conditions d'utilisation`)
  }
}

// Validate form
function validateForm(input) {
  cleanUp()
  const fns = {
    first: () => validateName(input.value),
    last: () => validateName(input.value),
    email: () => validateEmail(input.value),
    birthdate: () => validateDate(input.value),
    quantity: () => validateTournament(input.value),
    location1: () => validateRadio(input.checked),
    checkbox1: () => validateCondition(input.checked)
  }
  fns[input.id]()
  // console.log(input.value)
  // console.log(input.id)
  // validateName(field)
  // validateEmail(field)
  // validateDate(field)
  // validateTounament(field)
  // validateRadio(field)
  // validateCondition(field)
  // displayErrorMessage("")
}