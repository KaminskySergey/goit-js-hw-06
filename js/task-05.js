// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
inputEl: document.querySelector('#name-input'),
titleEl: document.querySelector('#name-output'),
}


refs.inputEl.addEventListener('input', onChangeValueTitle);


function onChangeValueTitle (event) {
let valueText = event.currentTarget.value;



return refs.inputEl !== " " ? (refs.titleEl.textContent = valueText) : "Anonymous";



}



