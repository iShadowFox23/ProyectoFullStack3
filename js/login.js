
document.addEventListener('DOMContentLoaded',function(){
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    const adminEmail = 'admin@magiceast.com';
    const adminPassword = 'contraseñaaa';

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

        errorMsg.style.display= 'none';
        errorMsg.textContent = '';
        if(email===''||password===''){
            errorMsg.textContent = 'Intente nuevamente';
            errorMsg.style.display = 'block';
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            errorMsg.textContent='El correo es inválido. Intente nuevamente';
            errorMsg.style.display = 'block';
            return;
        }
        if (email === "admin@magiceast.cl" && password === "contraseñaaa") {
        setTimeout(() => {
            window.location.href = "backoffice/backoffice.html"; 
        }, 1000); 
        return; 
        }
});


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



