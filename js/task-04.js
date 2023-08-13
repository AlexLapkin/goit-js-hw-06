const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const clickDec = (event) => {
    counterValue.textContent -- ;
    }

const clickInc = (event) => {
    counterValue.textContent ++ ;
}

btnDec.addEventListener('click', clickDec); 
btnInc.addEventListener('click', clickInc);