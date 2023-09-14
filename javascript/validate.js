// validate

// Validate fist name and last name
function validateName(name) {
  if (!name) {
    throw new Error(`Veuillez renseigner votre nom`);
  }
  if (name.length < 2) {
    // console.log("Nom trop court")
    throw new Error(`Cette entrée doit contenir au moins 2 caractères`);
  }
}

/**
 * The function `validateEmail` checks if an email address is valid and throws an error if it is not.
 * @param email - The `email` parameter is a string that represents an email address.
 */
function validateEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(email)) {
    throw new Error(`Veuillez renseigner un email valide`);
  }
}

// validate date
function validateDate(date) {
  let dateRegExp = new RegExp(
    "\\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])"
  );
  if (!dateRegExp.test(date)) {
    throw new Error(
      `Veuillez renseigner votre date de naissance au format jj/mm/aaaa`
    );
  }
}

// Validate number of tournament
function validateTournament(number) {
  if (!parseInt(number) && number !== "0") {
    // if (!parseInt(number)) {
    throw new Error(`Veuillez renseigner un nombre entier`);
  }
  if (number > 99) {
    throw new Error(`Veuillez renseigner un nombre inférieur à 100`);
  }
  if (number < 0) {
    throw new Error(`Veuillez renseigner un nombre supérieur ou égal à 0`);
    // let array = Array.from(formData)
    // let res = array.map((item) => {
    //   return item.value
    // });
    // if (array[i].type === "number") {
    //   // console.log(res[i])
    //   if (!parseInt(res[i]) && res[i] !== "0") {
    //     throw new Error(`Veuillez renseigner un nombre entier`)
    //   }
  }
}

// Validate radio button
function validateRadio(input) {
  // console.log(radio)
  // if (radio !== true) {
  //   throw new Error(`Vous devez choisir une ville`)
  // }
  let listeBtnRadios = input.querySelectorAll('input[type="radio"]');
  let selectedRadio;
  // console.log(listeBtnRadios)
  for (let listeBtnRadio of listeBtnRadios) {
    if (listeBtnRadio.checked) {
      selectedRadio = listeBtnRadio.checked;
      // console.log(selectedRadio)
      break;
    }
  }
  if (selectedRadio !== true) {
    throw new Error(`Vous devez choisir une ville`);
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
  let read = document.getElementById("checkbox1");
  // console.log(read.checked)
  if (read === false) {
    throw new Error(`Veuillez lire et accepter les conditions d'utilisation`);
  }
}

function validateAuto() {}

// Validate form

function validateForm(input) {
  console.log(input);
  cleanUp();
  const fns = {
    first: () => validateName(input.value),
    last: () => validateName(input.value),
    email: () => validateEmail(input.value),
    birthdate: () => validateDate(input.value),
    quantity: () => validateTournament(input.value),
    location: () => validateRadio(input),
    checkbox1: () => validateCondition(input.checked),
    checkbox2: () => validateAuto(),
  };
  fns[input.id]();
}
