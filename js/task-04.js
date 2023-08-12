const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

// Call-back функція декремента
const clickDec = (event) => {
    counterValue.textContent -- ;
    }

// Call-back функція інкремента
const clickInc = (event) => {
    counterValue.textContent ++ ;
}

btnDec.addEventListener('click', clickDec);    // Викликаємо на кнопку Dec слухача 
btnInc.addEventListener('click', clickInc);    // Викликаємо на кнопку Inc слухача