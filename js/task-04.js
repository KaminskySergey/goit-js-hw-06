// Сделал двумя способами. Какой из них лучше?
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const valueEl  = document.querySelector('#value');


let counterValue = 0;

btnDec.addEventListener('click', () => {
    valueEl.textContent = counterValue -= 1;
})

btnInc.addEventListener('click', () => {
    valueEl.textContent = counterValue += 1;
})

// btnDec.addEventListener('click', decrement)
// btnInc.addEventListener('click', increment)

// function decrement (){
//     counterValue -= 1;
//     valueEl.textContent = counterValue;
// }

// function increment (){
//     counterValue += 1;
//     valueEl.textContent = counterValue;
// }


