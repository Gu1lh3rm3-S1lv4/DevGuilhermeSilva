//configuração do intersectionObserver
const ObserverOptions = {
  threshold: 0.0
  //a função será chamada qunado 10% do elemento estiver visivel
};

//cria o observador que vigia os elementos na tela
const myObserver = new IntersectionObserver((entries) => {
  //para cada elemento monitorado
  entries.forEach((entry) => {
    //adicionaaa a classe show se estiver visivel,remove se nõ estiver
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, ObserverOptions);
//paassa as configurações definidas acima

//seleciona todos os elementos que quermos animar ao entrar n tela
document.querySelectorAll(
  ".container-sobre, .outerSectionDiv, .container-portfolio, .container-contato"
).forEach(el =>
  //ativa a observação para cada elemento selecionado
  myObserver.observe(el)
);
//quando o HTML terminar ded ser carregado(antes das imagens e outros recursos)
document.addEventListener('DOMContentLoaded', () => {
  //se não houver historico de navegação(ou seja, aceeso direto a pagina)
  if( history.state) {
    //força o scroll para o topo imediatamente(sem animação)
    window.scrollTo({top:0, left:0, behavior:"instant"});
  }
});
