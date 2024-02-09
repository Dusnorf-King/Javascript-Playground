"use strict"

function display(value) {
  document.getElementById("displayResult").value += value;
}

function clearScreen() {
  document.getElementById("displayResult").value = "";
}

function giveAns() {
  let a = document.getElementById("displayResult").value;
  let b = eval(a);
  document.getElementById("displayResult").value = b;
}

function del() {
  document.form.displayResult.value = document.form.displayResult.value.substr(0,form.displayResult.value.length-1)
}

function squareroot() {
 
}