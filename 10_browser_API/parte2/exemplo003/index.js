function incrementarFunc() {
  const valorAtual = Number(contador.textContent);
  contador.textContent = valorAtual + 1;
}

function decrementarFunc() {
  const valorAtual = Number(contador.textContent);
  contador.textContent = valorAtual - 1;
}

const incrementar = document.querySelector("#incrementar");
const decrementar = document.querySelector("#decrementar");
const contador = document.querySelector("#contador");

incrementar.addEventListener("click", incrementarFunc);

decrementar.addEventListener("click", decrementarFunc);
