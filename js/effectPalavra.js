const palavras = ["Desenvolvedor", "Ux/Ui", "Front-End" ];
const rotator = document.querySelector(".word-rotator");
const duracaoTotal = 8; // segundos (tempo total da animação)

palavras.forEach((palavra, index) => {
  const span = document.createElement("span");
  span.textContent = palavra;
  const delay = (duracaoTotal / palavras.length) * index;
  span.style.animationDuration = `${duracaoTotal}s`;
  span.style.animationDelay = `${delay}s`;
  rotator.appendChild(span);
});