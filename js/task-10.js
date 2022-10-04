

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');

btnCreate.addEventListener('click', getAmount)
btnDestroy.addEventListener('click', destroyBoxes)



function getAmount() {
    const num = document.querySelector("input");
    const amount = num.value;
    createBoxes(amount);
    
  }

const size = 30;
const plSize = 10;

function createBoxes(amount){

    const size = 30;
    
    const fragment = document.createDocumentFragment();

    for(let i = 0; i < amount; i += 1){
        const divRef = document.createElement('div');
        divRef.style.backgroundColor = getRandomHexColor();
        divRef.style.width = `${size + 10 * i}px`;
        divRef.style.height = `${size + 10 * i}px`;
        
        fragment.append(divRef);
        console.log(fragment)
    }

    box.append(fragment);
    
    

}

function destroyBoxes(){
    box.innerHTML = "";
    amount.innerHTML = "";
    
}



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }



