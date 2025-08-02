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
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  const webhookURL = https://script.google.com/macros/s/AKfycbwdUGZXyvvjimpasDKDVn3A7A--X-R45Sm_JIWl6-2eG9KkuDJDE0D0cngJiWkiVSt_/exec; // ← acá poné tu URL de Google Script

  try {
    await fetch(webhookURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password })
    });
    alert('¡Registro enviado!');
    registerForm.reset();
  } catch (error) {
    alert('Error al registrar');
    console.error(error);
  }
});
