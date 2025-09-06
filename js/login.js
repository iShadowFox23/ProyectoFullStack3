document.addEventListener('DOMContentLoaded', function(){
    const registerForm = document.getElementById('register-form');
    if(registerForm){
        registerForm.addEventListener('submit', function(event){
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = confirmPasswordInput = document.getElementById('confirm-password');
            const email = emailInput.value;
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('El formato del correo no es válido. Intente nuevamente');
                event.preventDefault(); 
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




