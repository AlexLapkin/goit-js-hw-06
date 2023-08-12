const textInput = document.querySelector('#name-input');
//console.log(textInput);
const textOutput = document.querySelector('#name-output');
//console.log(textOutput);

const funcInput = (event) => {
    textOutput.textContent = event.currentTarget.value; 
    if (textOutput.textContent === "") {
        textOutput.textContent = 'Anonymous';
    }
}

textInput.addEventListener("input", funcInput);