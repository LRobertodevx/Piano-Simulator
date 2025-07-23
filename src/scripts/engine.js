// Troca de nomes para português e melhorias visuais
const teclasPiano = document.querySelectorAll(".piano-keys .key");
const controleVolume = document.querySelector(".volume-slider input");
const mostrarTeclas = document.querySelector(".keys-check input");

let teclasMapeadas = [];
let audio = new Audio("src/tunes/a.wav");

const tocarNota = (tecla) => {
  audio.src = `src/tunes/${tecla}.wav`;
  audio.play();
  console.log(`Nota tocada: ${tecla}`);

  const teclaClicada = document.querySelector(`[data-key="${tecla}"]`);
  teclaClicada.classList.add("ativa");
  teclaClicada.style.boxShadow = "0 0 30px 10px #011555ff, 0 0 60px 20px #3333ff";
  teclaClicada.style.background = "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)";
  setTimeout(() => {
    teclaClicada.classList.remove("ativa");
    teclaClicada.style.boxShadow = "";
    teclaClicada.style.background = "";
  }, 300);
};

teclasPiano.forEach((tecla) => {
  tecla.addEventListener("click", () => tocarNota(tecla.dataset.key));
  teclasMapeadas.push(tecla.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (teclasMapeadas.includes(e.key)) {
    tocarNota(e.key);
  }
});

const ajustarVolume = (e) => {
  audio.volume = e.target.value;
  console.log(`Volume atual: ${audio.volume}`);
};

const alternarTeclas = () => {
  teclasPiano.forEach((tecla) => tecla.classList.toggle("hide"));
};

controleVolume.addEventListener("input", ajustarVolume);
mostrarTeclas.addEventListener("click", alternarTeclas);
