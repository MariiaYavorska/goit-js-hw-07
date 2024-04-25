'use strict'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

function randomBackgroundColor() {
  const randomHexColor = getRandomHexColor();

  document.body.style.backgroundColor = randomHexColor;  
  span.textContent = randomHexColor;
}

button.addEventListener("click", randomBackgroundColor);