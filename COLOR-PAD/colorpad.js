let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

/*
redDiv.onclick = () => alert("Hol'up, that's a red")
yellowDiv.onclick = () => alert("It's yellow, get ready.")
greenDiv.onclick = () => alert("It's green time, pammp it!")
*/

const squares = document.querySelectorAll(".colorBtn");

const timesClicked = { red: 0, yellow: 0, green: 0 };

squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});

function clearGame() {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach((square) => {
    square.innerText = "";
  });
}

const clearGameDiv = document.getElementById("black");
clearGameDiv.onclick = () => clearGame();
