const inputCont = document.querySelector('#validation-input');
//console.log(inputCont);
const dataLengthInput = inputCont.dataset.length;

const funcBlur = (event) => {
    inputCont.textContent = event.currentTarget.value;
    if (inputCont.textContent.length === Number(dataLengthInput)) {
        inputCont.classList.add("valid");
        inputCont.classList.remove("invalid");
         } else {
        inputCont.classList.add("invalid");
        inputCont.classList.remove("valid");
    }
}

inputCont.addEventListener("blur", funcBlur);