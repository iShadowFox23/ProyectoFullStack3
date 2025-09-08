
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    const adminEmail = 'admin@magiceast.com';
    const adminPassword = 'contraseñaaa';

    if (loginForm && emailInput && passwordInput) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            errorMsg.style.display = 'none';
            errorMsg.textContent = '';

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === '' || password === '') {
                errorMsg.textContent = 'Por favor, complete todos los campos.';
                errorMsg.style.display = 'block';
                return;
            }

            if (!emailRegex.test(email)) {
                errorMsg.textContent = 'El correo es inválido. Intente nuevamente';
                errorMsg.style.display = 'block';
                return;
            }

            if (email.toLowerCase() === adminEmail.toLowerCase() && password === adminPassword) {
                window.location.href = 'backoffice/backoffice.html';
                return;
            }

            errorMsg.textContent = 'Credenciales incorrectas.';
            errorMsg.style.display = 'block';
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            const emailInputRegistro = document.getElementById('email');
            const passwordInputRegistro = document.getElementById('password');
            const confirmPasswordInputRegistro = document.getElementById('confirmPassword');

            const email = emailInputRegistro ? emailInputRegistro.value.trim() : '';
            const password = passwordInputRegistro ? passwordInputRegistro.value : '';
            const confirmPassword = confirmPasswordInputRegistro ? confirmPasswordInputRegistro.value : '';

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('El formato del correo no es válido. Intente nuevamente');
                event.preventDefault();
                return;
            }

            if (password.length < 8) {
                alert('La contraseña debe tener al menos 8 caracteres.');
                event.preventDefault();
                return;
            }

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                event.preventDefault();
                return;
            }
        });
    }
});



