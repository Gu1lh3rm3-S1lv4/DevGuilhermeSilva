const slider = document.getElementById("bar-skills");

// Duplica o conteúdo para criar efeito de rolagem infinita
slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML += slider.innerHTML;

let pos = 0;              // Posição atual da rolagem
const speed = 1;          // Velocidade da rolagem
let animationId = null;   // Guardará o ID da animação

// Função de animação
function moveSlider() {
  pos += speed;
  slider.style.transform = `translateX(-${pos}px)`;

  // Reinicia ao atingir a metade (fim da primeira cópia)
  if (pos >= slider.scrollWidth / 2) {
    pos = 0;
  }

  // Salva o ID da animação para poder pausar depois
  animationId = requestAnimationFrame(moveSlider);
}

// Função para pausar a animação
function pauseSlider() {
  cancelAnimationFrame(animationId);
}

// Função para retomar a animação
function resumeSlider() {
  moveSlider();
}

// Inicia a animação
moveSlider();

// Pausa ao passar o mouse por cima do carrossel
slider.parentElement.addEventListener("mouseenter", pauseSlider);

// Retoma ao tirar o mouse
slider.parentElement.addEventListener("mouseleave", resumeSlider);


const slid = document.getElementById("bar");

// Duplica o conteúdo para criar efeito de rolagem infinita
slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML += slid.innerHTML;

let posi = 0;              // Posição atual da rolagem
const speeds = 1;          // Velocidade da rolagem
let animationIden = null;   // Guardará o ID da animação

// Função de animação
function moveSlid() {
  posi += speeds;
  slid.style.transform = `translateX(-${posi}px)`;

  // Reinicia ao atingir a metade (fim da primeira cópia)
  if (posi >= slid.scrollWidth / 2) {
    posi = 0;
  }

  // Salva o ID da animação para poder pausar depois
  animationIden = requestAnimationFrame(moveSlid);
}

// Função para pausar a animação
function pauseSlid() {
  cancelAnimationFrame(animationIden);
}

// Função para retomar a animação
function resumeSlid() {
  moveSlid();
}

// Inicia a animação
moveSlid();

// Pausa ao passar o mouse por cima do carrossel
slid.parentElement.addEventListener("mouseenter", pauseSlid);

// Retoma ao tirar o mouse
slid.parentElement.addEventListener("mouseleave", resumeSlid);


const slide3 = document.getElementById("bar-pt3");

// Duplica o conteúdo para criar efeito de rolagem infinita
slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML += slide3.innerHTML;

let posi3 = 0;              // Posição atual da rolagem
const speed3 = 1;          // Velocidade da rolagem
let animationIde = null;   // Guardará o ID da animação

// Função de animação
function moveSlide3() {
  posi3 += speed3;
  slide3.style.transform = `translateX(-${posi3}px)`;

  // Reinicia ao atingir a metade (fim da primeira cópia)
  if (posi3 >= slide3.scrollWidth / 2) {
    posi3 = 0;
  }

  // Salva o ID da animação para poder pausar depois
  animationIde = requestAnimationFrame(moveSlide3);
}

// Função para pausar a animação
function pauseSlide3() {
  cancelAnimationFrame(animationIde);
}

// Função para retomar a animação
function resumeSlide3() {
  moveSlide3();
}

// Inicia a animação
moveSlide3();

// Pausa ao passar o mouse por cima do carrossel
slide3.parentElement.addEventListener("mouseenter", pauseSlide3);

// Retoma ao tirar o mouse
slide3.parentElement.addEventListener("mouseleave", resumeSlide3);


const slide4 = document.getElementById("bar-pt4");

// Duplica o conteúdo para criar efeito de rolagem infinita
slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML += slide4.innerHTML;

let posi4 = 0;              // Posição atual da rolagem
const speed4 = 1;          // Velocidade da rolagem
let animationIden4 = null;   // Guardará o ID da animação

// Função de animação
function moveSlide4() {
  posi4 += speed4;
  slide4.style.transform = `translateX(-${posi4}px)`;

  // Reinicia ao atingir a metade (fim da primeira cópia)
  if (posi4 >= slide4.scrollWidth / 2) {
    posi4 = 0;
  }

  // Salva o ID da animação para poder pausar depois
  animationIden4 = requestAnimationFrame(moveSlide4);
}

// Função para pausar a animação
function pauseSlide4() {
  cancelAnimationFrame(animationIden4);
}

// Função para retomar a animação
function resumeSlide4() {
  moveSlide4();
}

// Inicia a animação
moveSlide4();

// Pausa ao passar o mouse por cima do carrossel
slide4.parentElement.addEventListener("mouseenter", pauseSlide4);

// Retoma ao tirar o mouse
slide4.parentElement.addEventListener("mouseleave", resumeSlide4);