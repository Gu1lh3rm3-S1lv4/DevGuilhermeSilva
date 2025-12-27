//* Lista com os IDs de todos os sliders que você quer animar
const sliderIds = ["bar-skills", "bar", "bar-pt3", "bar-pt4"];

//* Função que configura cada slider individualmente
function setupSlider(id) {
  const slider = document.getElementById(id);

  //* Se o elemento não existir na página, para a execução para não dar erro
  if (!slider) return;

  //* Remove padding do CSS que pode causar "pulos" na animação infinita
  slider.style.paddingLeft = "0";

  //* OTIMIZAÇÃO: Duplicar 15x trava o celular. 
  //* Duplicar 2 ou 3 vezes já é suficiente para o loop infinito visual.
  const content = slider.innerHTML;
  slider.innerHTML = content + content + content + content; 

  let pos = 0;
  const speed = 1; //* Velocidade
  let animationId = null;

  function moveSlider() {
    pos += speed;
    slider.style.transform = `translateX(-${pos}px)`;

    //* Lógica do Loop Infinito:
    //* Quando a rolagem atinge o tamanho de um bloco de conteúdo (1/4 do total),
    //* reiniciamos a posição para 0. Como o conteúdo é duplicado, isso é invisível.
    if (pos >= slider.scrollWidth / 4) {
      pos = 0;
    }

    animationId = requestAnimationFrame(moveSlider);
  }

  function pauseSlider() {
    cancelAnimationFrame(animationId);
  }

  function resumeSlider() {
    moveSlider();
  }

  //* Inicia a animação deste slider específico
  moveSlider();

  //* Eventos de Mouse (apenas para este slider)
  //* Usamos parentElement para pegar a área do container
  if (slider.parentElement) {
    slider.parentElement.addEventListener("mouseenter", pauseSlider);
    slider.parentElement.addEventListener("mouseleave", resumeSlider);
  }
}

// *O Loop Mágico: Aplica a função para cada ID da lista
sliderIds.forEach(id => setupSlider(id));