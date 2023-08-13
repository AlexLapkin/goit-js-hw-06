function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const inputValue = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');
let amount = 0;

const changeInputValue = (event) => {
  amount = event.currentTarget.value;
  return amount;
  }

const onClickCreate = (event) => {
  createBoxes(amount);
}

const onClickDestroy = (event) => {
  divBoxes.innerHTML = "";
}

function createBoxes(amount) {
  const divBoxesArr = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const item = `<div class="item" style="display: block; width: ${size}px ; height: ${size}px ; background-color: ${getRandomHexColor()}"></div>`;
    divBoxesArr.push(item);
  }
  divBoxes.insertAdjacentHTML("beforeend", divBoxesArr.join(''));
}

inputValue.addEventListener("input", changeInputValue);
buttonCreate.addEventListener("click", onClickCreate);
buttonDestroy.addEventListener("click", onClickDestroy);