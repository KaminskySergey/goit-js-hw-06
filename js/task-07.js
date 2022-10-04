const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');



input.addEventListener('input', chengeFontText);


function chengeFontText (event){
    // работает
text.style.fontSize = event.currentTarget.value +"px";

// работает
// text.style.fontSize = input.value +"px";
}
