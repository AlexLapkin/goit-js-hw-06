const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

const funcInput = (event) => {
    textOutput.textContent = event.currentTarget.value; 
    if (textOutput.textContent === "") {
        textOutput.textContent = 'Anonymous';
    }
}

textInput.addEventListener("input", funcInput);