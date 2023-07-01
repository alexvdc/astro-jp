const cards = document.querySelectorAll(".card");
const closeBtn = document.querySelectorAll(".close");
const modalBg = document.querySelectorAll(".modal__bg");

// console.log(modals);
cards.forEach((card) => {
  // Sélectionnez le modal qui suit immédiatement la carte
  const modal = card.nextElementSibling;

  card.addEventListener("click", () => {
    modal.classList.add("open");

    closeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.remove("open");
      });
      modalBg.forEach((bg) => {
        bg.addEventListener("click", () => {
          modal.classList.remove("open");
        });
      });
    });
  });
});
