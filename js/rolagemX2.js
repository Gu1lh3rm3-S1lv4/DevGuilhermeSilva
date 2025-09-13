// Cria uma instância do IntersectionObserver
const myObserver = new IntersectionObserver((entries) => {
  // Para cada elemento observado, verifica se está visível na viewport
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Se o elemento estiver visível (entrou na viewport), adiciona a classe 'show'
      entry.target.classList.add('show');
    } else {
      // Se o elemento não estiver mais visível, remove a classe 'show'
      entry.target.classList.remove('show');
    }
  });
});

// Seleciona todos os elementos com a classe 'sobre'
const elements = document.querySelectorAll('.container-portfolio-2');

// Inicia a observação de cada elemento selecionado
elements.forEach((element) => myObserver.observe(element));