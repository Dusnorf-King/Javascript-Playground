'use strict'

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('bttn');
const btnRst = document.getElementById('btn-rst');
const hexNum = document.querySelector('.color');



function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
};

btn.addEventListener('click', function(){
  let hexHash = "#";
  for(let i = 0; i < 6; i++){
    hexHash += hex[getRandomNumber()];
  }
  hexNum.textContent = hexHash;
  document.body.style.backgroundColor = hexHash;
});

btnRst.addEventListener('click', function() {
let hexHash = "#";
for (let i = 0; i < 6; i++) {
  hexHash += hex[15];
}
hexNum.textContent = hexHash;
document.body.style.backgroundColor = hexHash;
})