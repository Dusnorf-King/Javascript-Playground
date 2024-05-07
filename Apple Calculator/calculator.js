"use strict";

const getRoot = document.getElementById("squareroot");
const displayResult = document.getElementById("displayResult");

function display(value) {
  displayResult.value += value;
}

function clearScreen() {
  displayResult.value = "";
}

function giveAns() {
  try {
    let a = displayResult.value;
    let b = eval(a);
    displayResult.value = b;
  } catch (error) {
    displayResult.value = "Syntax Error";
  }
}

function del() {
  document.form.displayResult.value = document.form.displayResult.value.substr(
    0,
    form.displayResult.value.length - 1
  );
}


getRoot.addEventListener("click", function () {
  displayResult.value = Number(Math.sqrt(displayResult.value).toFixed(5));
});
