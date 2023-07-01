const btnExtend = document.querySelector("#summaryExtend");
const summaryExtend = document.querySelector(
  ".summary-container__content--extend"
);
btnExtend.addEventListener("click", () => {
  summaryExtend.classList.toggle("more");
  btnExtend.innerHTML === "+"
    ? (btnExtend.innerHTML = "-")
    : (btnExtend.innerHTML = "+");
});