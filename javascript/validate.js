// validate

// Validate fist name and last name
function validateName(name) {
  if (!name) {
    throw new Error(`Veuillez renseigner votre nom`)
  }
  if (name.length < 2) {
    throw new Error(`Cette entrée doit contenir au moins 2 caractères`)
  }
}

// validate email
function validateEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
    throw new Error(`Veuillez renseigner un email valide`)
  }
}

// validate date
// function validateDate(date) {
//   let dateRegExp = new RegExp("\\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])")
//   if (!dateRegExp.test(date)) {
//     throw new Error(`Veuillez renseigner votre date de naissance au format jj/mm/aaaa`)
//   }
// }

function validateDate(date) {

  // Divisez la date en jour, mois et année
  const parts = date.split('-');
  const jour = parseInt(parts[2], 10);
  const mois = parseInt(parts[1], 10);
  const annee = parseInt(parts[0], 10);
  console.log(date)
  console.log(jour)
  console.log(mois)
  console.log(annee)
  
  // Obtenez la date actuelle
  const dateActuelle = new Date();
  
  // Calculez l'âge en soustrayant l'année de naissance de l'année actuelle
  let age = dateActuelle.getFullYear() - annee;
  
  // Vérifiez si l'anniversaire est déjà passé cette année
  if (
    dateActuelle.getMonth() < mois - 1 ||
    (dateActuelle.getMonth() === mois - 1 && dateActuelle.getDate() < jour)
  ) {
    age--;
  }
  console.log(age)
  // Vérifiez si la personne est majeure (âge >= 18)
  // return age >= 18;
  let dateRegExp = new RegExp("\\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])")
  if (!dateRegExp.test(date)) {
    throw new Error(`Veuillez renseigner votre date de naissance au format jj/mm/aaaa`)
  } if (age < 18) {
    throw new Error(`Vous devez être majeur pour participer`)
  }
}
  
// Exemple d'utilisation :
// const dateDeNaissance = '14/09/2000'; // Remplacez ceci par la date de naissance de la personne
// if (estMajeur(dateDeNaissance)) {
//   console.log('La personne est majeure.');
// } else {
//   console.log('La personne n\'est pas majeure.');
// }

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
  let listeBtnRadios = input.querySelectorAll('input[type="radio"]')
  let selectedRadio
  // console.log(listeBtnRadios)
  for (let listeBtnRadio of listeBtnRadios) {
    if (listeBtnRadio.checked) {
      selectedRadio = listeBtnRadio.checked
      break
    }
  }
  if (selectedRadio !== true) {
    throw new Error(`Vous devez choisir une ville`)
 }
}

// validate condition
function validateCondition(read) {
  if (read === false) {
    throw new Error(`Veuillez lire et accepter les conditions d'utilisation`)
  }
}

function validateAuto () {
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
    location: () => validateRadio(input),
    checkbox1: () => validateCondition(input.checked),
    // checkbox2: () => validateAuto()
  }
  fns[input.id]()
}