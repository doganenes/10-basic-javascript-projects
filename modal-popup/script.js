const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const modalContainer = document.getElementById("modal_container");

btnOpen.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

btnClose.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
