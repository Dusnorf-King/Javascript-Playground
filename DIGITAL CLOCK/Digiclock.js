"use strict";

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const formatEl = document.getElementById("format");

function getTime() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "PM";

  if (hr > 12) {
    hr -= 12;
    ampm = "AM";
  }

  if (hr === 0) {
    hr = 12;
  }

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hoursEl.textContent = hr;
  minutesEl.textContent = min;
  secondsEl.textContent = sec;
  formatEl.textContent = ampm;

  setTimeout(function () {
    getTime();
  }, 1000);
}

getTime();
