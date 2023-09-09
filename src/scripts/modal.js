document.addEventListener("astro:page-load", () => {
  const cards = document.querySelectorAll(".card");

  function openModal(modal) {
    modal.classList.add("open");
  }

  function closeModal(modal) {
    modal.classList.remove("open");
  }

function toCloseModal(modal) {
  const closeBtns = modal.querySelectorAll(".close");
  const modalBgs = modal.querySelectorAll(".modal__bg");

  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      closeModal(modal);
    });
  });

  modalBgs.forEach((modalBg) => {
    modalBg.addEventListener("click", () => {
      closeModal(modal);
    });
  });
}

  cards.forEach((card, index) => {
    const modal = card.nextElementSibling;

    card.addEventListener("click", () => {
      openModal(modal);
      toCloseModal(modal);
    });
  });
});
