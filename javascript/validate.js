// Validate fist name and last name
function validateName(name) {

  // If name's field is empy, return error
  if (!name) {
    throw new Error(`Veuillez renseigner votre nom`)
  }

  // If name's field lenght is too short, return error
  if (name.length < 2) {
    throw new Error(`Cette entrée doit contenir au moins 2 caractères`)
  }
}

// Validate email
function validateEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
    throw new Error(`Veuillez renseigner un email valide`)
  }
}

// Validate date
function validateDate(date) {

  // Divide the date into day, month and year
  const parts = date.split('-');
  const jour = parseInt(parts[2], 10)
  const mois = parseInt(parts[1], 10)
  const annee = parseInt(parts[0], 10)
  
  // Current date
  const dateActuelle = new Date()
  
  // Calculate age by subtracting year of birth from current year
  let age = dateActuelle.getFullYear() - annee
  
  // Check if the birthday has already passed this year
  if (
    dateActuelle.getMonth() < mois - 1 ||
    (dateActuelle.getMonth() === mois - 1 && dateActuelle.getDate() < jour)
  ) {
    age--
  }

  // Check date's field
  let dateRegExp = new RegExp("\\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])")
  if (!dateRegExp.test(date)) {
    throw new Error(`Veuillez renseigner votre date de naissance au format jj/mm/aaaa`)

  // Check if the person is an adult (age >= 18)  
  } if (age < 18) {
    throw new Error(`Vous devez être majeur pour participer`)
  }
}

// Validate number of tournament
function validateTournament(number) {
  if (!parseInt(number) && number !== "0") {
  // if (!parseInt(number)) {
    throw new Error(`Veuillez renseigner un nombre entier`)
  } if (number > 99) {
    throw new Error(`Veuillez renseigner un nombre inférieur à 100`)
  } if (number < 0) {
    throw new Error(`Veuillez renseigner un nombre supérieur ou égal à 0`)
  }
}

// Validate radio button
function validateRadio(input) {

  // Get all radio buttons as an array
  let listeBtnRadios = input.querySelectorAll('input[type="radio"]')
  let selectedRadio

  // Browse the state of the radio buttons and as soon as a button is checked, store the data and stop the function
  for (let listeBtnRadio of listeBtnRadios) {
    if (listeBtnRadio.checked) {
      selectedRadio = listeBtnRadio.checked
      break
    }
  }

  // Return error if none raddio button are checked
  if (selectedRadio !== true) {
    throw new Error(`Vous devez choisir une ville`)
 }
}

// Validate condition of use
function validateCondition(read) {
  if (read === false) {
    throw new Error(`Veuillez lire et accepter les conditions d'utilisation`)
  }
}

// Validate form
function validateForm(input) {

  // Clean all error message
  cleanUp()

  // Create an array containing all the validation functions then we traverse the array
  const fns = {
    first: () => validateName(input.value),
    last: () => validateName(input.value),
    email: () => validateEmail(input.value),
    birthdate: () => validateDate(input.value),
    quantity: () => validateTournament(input.value),
    location: () => validateRadio(input),
    checkbox1: () => validateCondition(input.checked),
  }
  fns[input.id]()
}