const inputFontSize = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

const changeStyle = (event) => {
    output.style.fontSize = `${event.currentTarget.value}px`;
    }

inputFontSize.addEventListener("input", changeStyle);