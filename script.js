const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const errorMessage = document.getElementById('error-message');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter a username and password.';
    } else {
        errorMessage.textContent = '';
        // Perform login logic here
    }
});