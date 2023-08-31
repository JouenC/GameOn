// confirmation

// Confirmation
function confirmation(firstName) {
    let modalBody = document.querySelector(".modal-body")
    let thanks = `
      <div></div>
      <div>Merci ${firstName} de ton inscription</div>
      <button class="btn-submit fermerButton">
            Fermer
          </button>
      `
    modalBody.innerHTML = thanks
  
    // Confirmation's style
    modalBody.style.cssText = `
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 600px
      `
    // modalBody.style.display = "flex"
    // modalBody.style.flexDirection = "column"
    // modalBody.style.justifyContent = "space-between"
    // modalBody.style.alignItems = "center"
    // modalBody.style.height = "600px"
  
    // Close Modal
    document.querySelector(".fermerButton").addEventListener("click", () => {
      // console.log("Bye!")
      closeModal()
      // modalbg.style.display = "none"
    })
    // window.confirm(`Merci ${firstName} de ton inscription`)
    // closeModal()
  }