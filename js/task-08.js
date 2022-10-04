const form = document.querySelector('.login-form');
// const inputMail = document.querySelector('[type="email"]');
// const inputPass = document.querySelector('[type="password"]');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    if(formElements.email.value === "" || formElements.password.value === "" ){
        alert("Error! Fill in all the fields");
    }
    else{
        
        const email = formElements.email.value;
        const password = formElements.password.value;

        const formData = { email, password, }
        console.log(formData);

        event.currentTarget.reset();
    }
}