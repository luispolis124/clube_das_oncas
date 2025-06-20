function entrarJogo() {
  document.querySelector('.menu').classList.add('hidden');
  document.querySelector('.jogo').classList.remove('hidden');
  iniciarJogo();
}

let personagem = {
  x: 50,
  y: 50,
  tamanho: 40
};

function iniciarJogo() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Onça (avatar)
    ctx.fillStyle = "orange";
    ctx.fillRect(personagem.x, personagem.y, personagem.tamanho, personagem.tamanho);
  }

  function atualizar() {
    desenhar();
    requestAnimationFrame(atualizar);
  }

  atualizar();
}

function mover(direcao) {
  const velocidade = 10;
  if (direcao === "esquerda") personagem.x -= velocidade;
  if (direcao === "direita") personagem.x += velocidade;
  if (direcao === "cima") personagem.y -= velocidade;
  if (direcao === "baixo") personagem.y += velocidade;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") mover("esquerda");
  if (e.key === "ArrowRight") mover("direita");
  if (e.key === "ArrowUp") mover("cima");
  if (e.key === "ArrowDown") mover("baixo");
});
