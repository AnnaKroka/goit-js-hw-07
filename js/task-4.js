const formEL = document.querySelector('.login-form');

const onFormSubmit = event => {
event.preventDefault();

const formData = {
    email: formEL.elements.email.value.trim(),
    password: formEL.elements.password.value.trim(),
};

const userEmail = formData.email;
const userPassword = formData.password;

if(userEmail === '' || userPassword === '') {
alert('All form fields must be filled in');
};

console.log(formData);

formEL.reset();
}

formEL.addEventListener('submit', onFormSubmit);
