const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterTitleEl = document.querySelector('.counter__title');
const counterValueEl = document.querySelector('.counter__value');

const incrementCounter = () => {
    // get current value of counter
    const currentVal = counterValueEl.textContent;

    // convert string to number
    const currentValAsNumber = +currentVal;

    // increment by 1
    let newValue = currentValAsNumber + 1;

    // check if number is over 5
    if (newValue >= 5) {
        newValue = 5;
        counterEl.classList.add('counter--limit');
        counterTitleEl.innerHTML = 'limit! Buy <b>pro</b> for > 5';

        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    }

    // set counter element with new value
    counterValueEl.textContent = newValue;

    // unfocus (blur) button
    increaseButtonEl.blur();
}


increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter);

decreaseButtonEl.addEventListener('click',() => {
    // get current value 
    const currentVal = counterValueEl.textContent;
   
    // convert string to number
    const currentValAsNumber = +currentVal;

    // decrement value by 1
    let newValue = currentValAsNumber - 1;

    // check if number is less than 0
    if (newValue < 0) {
        newValue = 0;
    }

    // set counter element with new value 
    counterValueEl.textContent = newValue;

     // unfocus (blur) button
     decreaseButtonEl.blur();
});

resetButtonEl.addEventListener('click', () => {
    counterValueEl.textContent = 0;
    counterEl.classList.remove('counter--limit');
    counterTitleEl.textContent = 'Fancy Counter';
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

     // unfocus (blur) button
     resetButtonEl.blur();
});




