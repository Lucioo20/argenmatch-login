const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const formTitle = document.getElementById('form-title');
const toggleTheme = document.getElementById('dark-mode-toggle');

showRegister.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
  formTitle.textContent = 'Registrarse';
});

showLogin.addEventListener('click', () => {
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  formTitle.textContent = 'Iniciar Sesión';
});

toggleTheme.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggleTheme.checked);
});