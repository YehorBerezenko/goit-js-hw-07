const inputElem = document.querySelector('input');
const spanEl = document.querySelector('span');

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