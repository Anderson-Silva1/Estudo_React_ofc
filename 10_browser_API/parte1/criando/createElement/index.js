const selecionandoLista = document.getElementsByTagName("ul");
const criarItem = document.createElement("li");
criarItem.textContent = "Ítem 2";

selecionandoLista[0].appendChild(criarItem);

// !--------------------------------

const selecionandoItems = document.querySelectorAll("ul > li");
const criarItemBefore = document.createElement("li");
criarItemBefore.textContent = "Ítem meio";

selecionandoLista[0].insertBefore(criarItemBefore, selecionandoItems[1]);

// !--------------------------------

// selecionandoLista[0].removeChild(criarItem);
// selecionandoLista[0].removeChild(selecionandoItems[0]);
// selecionandoLista[0].removeChild(criarItemBefore);
