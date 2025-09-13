/*MENU BTN SOCIAL*/

/*ATIVAÇÃO BTN SOCIAL*/
function toggleMenu() {
  document.querySelector('.social-container').classList.toggle('active');
}

/*ADICIONA UM OUVINTE DE EVENTO DE CLIQUE NO DOCUMENTO INTEIRO*/
document.addEventListener('click', function (event) {
  /*SELECIONA O CONTAINER PRINCIPAL DO BOTAO E DOS BOTOES SOCIAIS*/
  const socialContainer = document.querySelector('.social-container');
  /*SELECIONA APENAS O BOTAO PRINCIPAL DO MENU*/
  const socialBtn = document.querySelector('.btn-social');
  /*VERIFICA SE O CLICK NAO FOI DENTRO DO BTN PRINCIPAL*/
  if (!socialBtn.contains(event.target)) {
    /*SE CLICOU FORA, REMOVE A CLASSE 'ACTIVE' DO CONTAINER (ESCONDE OS BTN SOCIAL)*/
    socialContainer.classList.remove('active');
  }
});

/*ADICIONA UM OUVINTE DE EVENTO DE CLIQUE NO BOTAO PRINCIPAL*/
Document.querySelector('.btn-social').addEventListener('click', function (event) {
  /*IMPEDE QUE O CLIQUE NO BOTAO PRINCIPAL SE PROPAGUE PARA O DOCUMENTO*/
  /*EVITA QUE O BOTAO FECHE IMEDIATAMENTE AO SER CLICADO*/
  event.stopPropagation();
});
