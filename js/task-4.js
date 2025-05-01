const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', handleUserForm)

function handleUserForm(e) {
    e.preventDefault();
    const userEmail = e.target.elements.email.value;
    const userPassword = e.target.elements.password.value;
    const data = {
        email: userEmail.trim(),
        password: userPassword.trim()
    }
    

    if (userEmail === '' || userPassword === '') {
        alert('All form fields must be filled in');
    }
    console.log(" handleUserForm data:", data);
    e.target.reset();
}