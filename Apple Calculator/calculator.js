function display(value) {
  document.getElementById("display-result").value += value;
}

function clearScreen() {
  document.getElementById("display-result").value = "";
}

function giveAns() {
  let a = document.getElementById("display-result").value;
  let b = eval(a);
  document.getElementById("display-result").value = b;
}

