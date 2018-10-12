function EnviarRegistrar() {
  var nome = document.querySelector('#nome');
  var email = document.querySelector('#email');
  var rm = document.querySelector('#rm');
  var dtnascimento = document.querySelector('#dtnascimento');
  var cpf = document.querySelector('#cpf');
  var rg = document.querySelector('#rg');

  if (nome.length == 0) {
    alert('Nome está vazio!');
    document.querySelector('#nome').focus();
    return;
  }
  else if (email.length == 0) {
    alert('Email está vazio!');
    document.querySelector('#email').focus();
    return;
  }
  else if (rm.length == 0) {
    alert('RM está vazio!');
    document.querySelector('#rm').focus();
    return;
  }
  else if (dtnascimento.length == 0) {
    alert('Data de nasicmento está vazio!');
    document.querySelector('#dtnascimento').focus();
    return;
  }
  else if (cpf.length == 0) {
    alert('CPF está vazio!');
    document.querySelector('#cpf').focus();
    return;
  }
  else if (rg.length == 0) {
    alert('RG está vazio!');
    document.querySelector('#RG').focus();
    return;
  }
}

var botao = document.querySelector('#btCadastrar');
botao.addEventListener('click', EnviarRegistrar);
