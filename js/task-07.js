// Варіант 1 - через querySelector
const inputFontSize = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

const changeStyle = (event) => {
    output.style.fontSize = `${event.currentTarget.value}px`;
    }

inputFontSize.addEventListener("input", changeStyle);


// Варіант 2 - через getElementById
const inpFontSize = document.getElementById('font-size-control');
const outPut = document.getElementById('text');

const changeStyleText = (event) => {
    outPut.style.fontSize = `${event.currentTarget.value}px`;
    }

inpFontSize.addEventListener("input", changeStyleText);