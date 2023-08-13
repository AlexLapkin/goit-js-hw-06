function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const button = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

const changeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = `${getRandomHexColor()}`; 
}

button.addEventListener("click", changeColor);