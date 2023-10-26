const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnOpenModal);

const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let index = 0; index < btnOpenModal.length; index++)
  btnOpenModal[index].addEventListener("click", openmodal);
  btnCloseModal.addEventListener("click", closemodal);
  overlay.addEventListener("click", closemodal);

  document.addEventListener('keydown',function (e) {
    console.log(e.key)
if (e.key === 'Escape') {
  console.log('Escape is a press')
  if (!modal.classList.contains('hidden')) {
    closemodal()
  }
}else if (e.key === 'Enter') {
  openmodal()
}
  })