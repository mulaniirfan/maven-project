document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (username === '' || password === '') {
            message.textContent = 'Please fill in both fields.';
            message.style.color = 'red';
            return;
        }

        // Simulate login (replace this with actual login logic)
        if (username === 'user' && password === 'pass') {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Invalid username or password.';
            message.style.color = 'red';
        }
    });
});

