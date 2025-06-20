const palavrasBanidas = ["idiota", "palavrão"];

function enviarMensagem(texto) {
  const temOfensa = palavrasBanidas.some(p => texto.includes(p));
  if (temOfensa) {
    alert("Mensagem contém palavras não permitidas.");
    return;
  }
  adicionarChat("Você", texto);
}

function adicionarChat(usuario, msg) {
  const chat = document.getElementById("chat");
  const msgDiv = document.createElement("div");
  msgDiv.innerText = `${usuario}: ${msg}`;
  chat.appendChild(msgDiv);
}
