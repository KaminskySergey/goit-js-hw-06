


const btn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.querySelector('body');



btn.addEventListener('click', btnChangeColor);


function btnChangeColor(){
    body.style.backgroundColor = getRandomHexColor();
    textColor.textContent = body.style.backgroundColor
}



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}