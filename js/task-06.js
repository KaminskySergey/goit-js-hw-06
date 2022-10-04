const input = document.querySelector('#validation-input');



input.addEventListener('focus', onBlurInput);
input.addEventListener('blur', onBlurInput);

function onBlurInput (event) {
console.log(event.currentTarget.value)

if(event.currentTarget.value.length == 6){
    input.classList.add('valid');
    input.classList.remove('invalid');
    
    
}
else{
    input.classList.remove('valid');
    input.classList.add('invalid');
    
}

}

