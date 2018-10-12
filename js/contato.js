function EnviarContato() {
  var nome = document.querySelector('#nome').value;
  var rm = document.querySelector('#rm').value;
  var email = document.querySelector('#email').value;
  var msg = document.querySelector('#msg').value;

  // Validação
  if (nome.length == 0) {
    alert('Nome está vazio!');
    document.querySelector('#nome').focus();
    return;
  }else if (!isNaN(nome)) {
    alert('Nome não pode conter numeros');
    document.querySelector('#nome').focus();
    return
  }

  else if (email.length == 0) {
    alert('E-mail está vazio!');
    document.querySelector('#email').focus();
    return;
  }
  else if (msg.length == 0) {
    alert('Mensagem está vazio!');
    document.querySelector('#msg').focus();
    return
  }
}

var botao = document.querySelector('#btEnviar');
botao.addEventListener('click', EnviarContato);
