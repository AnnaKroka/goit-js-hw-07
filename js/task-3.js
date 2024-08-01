const fieldInputEl = document.querySelector('#name-input');
const fieldOutputEl = document.querySelector('#name-output');

const onFieldInput = () =>{
    const username = fieldInputEl.value.trim();
    fieldOutputEl.textContent = username.trim();
    if(username === '') {
        fieldOutputEl.textContent = 'Anonymous';
    };
};

fieldInputEl.addEventListener('input', onFieldInput);