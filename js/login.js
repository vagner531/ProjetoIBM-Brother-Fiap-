function EnviarLogin() {
  var email = document.querySelector('#email');
  var senha = document.querySelector('#senha');

  if (email.length == 0) {
    alert('Email está vazio!');
    document.querySelector('#email').focus();
    return;
  }

  else if (senha.length == 0) {
    alert('Senha está vazio!');
    document.querySelector('#senha').focus();
    return;
  }
}

var botao = document.querySelector('#btEntrar');
botao.addEventListener('click', EnviarLogin);
