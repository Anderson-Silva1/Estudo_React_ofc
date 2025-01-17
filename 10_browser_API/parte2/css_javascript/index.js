const divAzul = document.getElementById("div_azul");

// ? Essa éa forma inline de adicionar CSS
divAzul.style.width = "200px";
divAzul.style.height = "200px";
divAzul.style.backgroundColor = "blue";
divAzul.style.margin = "20px 0";

// ? Usando Classes

const divVermelho = document.getElementById("div_vermelho");

console.log(divVermelho.classList);
console.log(divVermelho.className);

divVermelho.classList.add("div_vermelho");
divVermelho.classList.remove("centralizar");

// ! Mudando TEMA
const buttonTheme = document.getElementById("theme");

let darkTheme = false;

buttonTheme.addEventListener("click", () => {
  darkTheme = !darkTheme;

  const body = document.querySelector("body");

  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    divAzul.style.backgroundColor = "red";
    divVermelho.classList.add("azul");
    divVermelho.classList.remove("div_vermelho");
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    divAzul.style.backgroundColor = "blue";
    divVermelho.classList.remove("azul");
    divVermelho.classList.add("div_vermelho");
  }
});
