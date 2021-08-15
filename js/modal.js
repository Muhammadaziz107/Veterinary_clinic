const elModal = document.querySelector(".modal");
const elModalBtn = document.querySelector(".header-bottom__button");
const elModalClosebtn = document.querySelector(".close-btn");

elModalBtn.addEventListener("click", function () {
  elModal.classList.add("modal--active");
});
elModalClosebtn.addEventListener("click", function () {
  elModal.classList.remove("modal--active");
});

var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".form-input");
var elResult1 = document.querySelector(".result1");
var elResult2 = document.querySelector(".result2");
var elResult3 = document.querySelector(".result3");
var elResult4 = document.querySelector(".result4");
var menSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

function checkTime(distance, speed) {
  return distance / speed;
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var numberResult = Number(elInput.value.trim());

  elResult1.textContent = checkTime(numberResult, menSpeed);
  elResult2.textContent = checkTime(numberResult, bikeSpeed);
  elResult3.textContent = checkTime(numberResult, carSpeed);
  elResult4.textContent = checkTime(numberResult, planeSpeed);
});
