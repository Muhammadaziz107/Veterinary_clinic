const elModal = document.querySelector(".modal");
const elModalBtn = document.querySelector(".header-bottom__button");
const elModalClosebtn = document.querySelector(".close-btn");

elModalBtn.addEventListener("click", function () {
  elModal.classList.add("modal--active");
});
elModalClosebtn.addEventListener("click", function () {
  elModal.classList.remove("modal--active");
});
