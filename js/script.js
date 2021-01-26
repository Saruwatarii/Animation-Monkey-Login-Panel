const monkeyHandImg = document.querySelector("img");
const monkeyHandContainer = document.querySelector(".pic-holder-container");

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#pwd");

inputEmail.addEventListener("click", openeye);
inputPassword.addEventListener("click", closeye);

function openeye(e) {
  monkeyHandImg.style.marginTop = "55%";
}

function closeye() {
  monkeyHandImg.style.marginTop = "-2%";
  console.log("close");
}
