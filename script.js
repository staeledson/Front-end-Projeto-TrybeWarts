function verificarEmail() {
  const email = document.getElementById('input-login-email').value;
  const pass = document.getElementById('input-login-password').value;
  if (email === 'tryber@teste.com' && pass === '123456') {
    return (alert('Olá, Tryber!'));
  }
  return (alert('Email ou senha inválidos.'));
}

const btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click', verificarEmail);

const textArea = document.getElementById('textarea');
const contadorDeCaracteres = document.getElementById('counter');
const maximoCaracteres = 500;
const contadorCaracteres = () => {
  const caracteresDigitados = textArea.value.length;
  const counter = maximoCaracteres - caracteresDigitados;
  contadorDeCaracteres.textContent = `${counter}/500`;
};
textArea.addEventListener('input', contadorCaracteres);

// function habilitarBtnSend (btn) {
//   // btn.
// }

// const btnEnviar = document.getElementById('');
// btnEnviar.addEventListener('click', );
