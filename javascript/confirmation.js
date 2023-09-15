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
  
    // Close Modal
    document.querySelector(".fermerButton").addEventListener("click", () => {
      closeModal()
    })
  }