function verificarEmail() {
  const email = document.getElementById('input-email').value;
  const pass = document.getElementById('input-password').value;
  if (email === 'tryber@teste.com' && pass === '123456') {
    return (alert('Olá, Tryber!'));
  }
  return (alert('Email ou senha inválidos.'));
}

const btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click', verificarEmail);

// function habilitarBtnSend (btn) {
//   // btn.
// }

// const btnEnviar = document.getElementById('');
// btnEnviar.addEventListener('click', );