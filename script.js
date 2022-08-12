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

function habilitarBtnSend() {
  const checkBox = document.getElementById('agreement');
  const btnEnviar = document.getElementById('submit-btn');
  if (checkBox.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}
if (false) {
  habilitarBtnSend();
}

function displayName() {
  const formNome = document.getElementById('input-name').value;
  const formSobrenome = document.getElementById('input-lastname').value;

  document.getElementById('evaluation-form').style.display = 'none';
  document.getElementById('form-data').style.display = 'block';
  document.getElementById('name-data').innerHTML = `${formNome} ${formSobrenome}`;
}

function displayEmail() {
  const formEmail = document.getElementById('input-email').value;
  document.getElementById('email-data').innerHTML = formEmail;
}

function displayCasa() {
  const casaIndex = document.getElementById('house').selectedIndex;
  const formCasa = document.getElementById('house').options[casaIndex].value;
  document.getElementById('house-data').innerHTML = formCasa;
}

function displayFamilia() {
  const arrayFamilia = document.getElementsByName('family');
  let formFamilia;

  for (let i = 0; i < arrayFamilia.length; i += 1) {
    if (arrayFamilia[i].checked) {
      formFamilia = arrayFamilia[i].value;
    }
  }
  document.getElementById('family-data').innerHTML = formFamilia;
}

function displayConteudo() {
  const arrayConteudo = document.getElementsByName('conteudo');
  const formConteudo = [];

  for (let i = 0; i < arrayConteudo.length; i += 1) {
    if (arrayConteudo[i].checked) {
      formConteudo.push(arrayConteudo[i].value);
    }
  }
  document.getElementById('conteudo-data').innerHTML = formConteudo.join(', ');
}

function displayAvalia() {
  const arrayAvalia = document.getElementsByName('rate');
  let formAvalia;

  for (let i = 0; i < arrayAvalia.length; i += 1) {
    if (arrayAvalia[i].checked) {
      formAvalia = arrayAvalia[i].value;
    }
  }
  document.getElementById('rate-data').innerHTML = formAvalia;
}

function displayText() {
  const formText = document.getElementById('textarea').value;
  document.getElementById('text-data').innerHTML = formText;
}

const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', (e) => {
  displayName();
  displayEmail();
  displayCasa();
  displayFamilia();
  displayConteudo();
  displayAvalia();
  displayText();
  e.preventDefault();
});
