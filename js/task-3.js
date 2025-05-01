const inputElem = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputElem.addEventListener('input', handleUserNameInput);

function handleUserNameInput(e) {
    const userValue = e.target.value.trim();
    
    if (userValue === '') {
        spanEl.textContent = 'Anonymous';
    }
    else {
        spanEl.textContent = userValue;
    }
};