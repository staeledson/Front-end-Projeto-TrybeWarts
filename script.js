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

function validarForm() {
  var formNome = document.getElementById('input-name').value;
  var formSobrenome = document.getElementById('input-lastname').value;
  var formEmail = document.getElementById('input-email').value;
  var formCasa = document.getElementById('house').options[document.getElementById('house').selectedIndex].value;
  var arrayFamilia = document.getElementsByName('family');
  var formFamilia;
  var arrayConteudo = document.getElementsByName('conteudo');
  var formConteudo = [];
  var arrayAvalia = document.getElementsByName('rate');
  var formAvalia;
  var formText = document.getElementById('textarea').value;

  for (let i=0; i<arrayFamilia.length; i++) {
    if(arrayFamilia[i].checked) {
      formFamilia = arrayFamilia[i].value;
    }
  }

  for (let i=0; i<arrayConteudo.length; i++) {
    if(arrayConteudo[i].checked) {
      formConteudo.push(arrayConteudo[i].value);
    }
  }

  for (let i=0; i<arrayAvalia.length; i++) {
    if(arrayAvalia[i].checked) {
      formAvalia = arrayAvalia[i].value;
    }
  }

  document.getElementById('evaluation-form').style.display = "none";
  document.getElementById('form-data').style.display = "block";
  document.getElementById('name-data').innerHTML = formNome + " " +formSobrenome;
  document.getElementById('email-data').innerHTML = formEmail;
  document.getElementById('house-data').innerHTML = formCasa;
  document.getElementById('family-data').innerHTML = formFamilia;
  document.getElementById('conteudo-data').innerHTML = formConteudo.join(', ');
  document.getElementById('rate-data').innerHTML = formAvalia;
  document.getElementById('text-data').innerHTML = formText;
 
}