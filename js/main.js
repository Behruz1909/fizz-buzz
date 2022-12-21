let elForm = document.querySelector(".js__form");
let elInput = document.querySelector(".js__input");
let elBtn = document.querySelector(".js__btn");
let elTitle = document.querySelector(".js__title");

elForm.addEventListener("submit", function (event) {
  event.preventDefault();



  let elInputVal = elInput.value;

  if (elInputVal % 3 == 0 && elInputVal % 5 == 0) {
    elTitle.textContent = `${elInputVal} : 3 ga ham 5 ga ham bolinadi`;
  } else if (elInputVal % 3 == 0) {
    elTitle.textContent = `${elInputVal} : 3 ga bolinadi`;
  } else if (elInputVal % 5 == 0) {
    elTitle.textContent = `${elInputVal} : 5 ga bolinadi`;
  } else {
    elTitle.textContent = `${elInputVal} : Ikkalasiga ham bolinmaydi`;
  }
});
elForm.addEventListener("submit")
