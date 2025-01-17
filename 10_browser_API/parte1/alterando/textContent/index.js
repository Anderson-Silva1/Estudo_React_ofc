const pTextContent = document.querySelector("p#pTextContent");

console.log(pTextContent.textContent); // Pega apenas o texto

pTextContent.textContent = "<strong>Outra coisa</strong>"; //! Não dá certo, pois ele só muda o texto

console.log(pTextContent.innerHTML);

pTextContent.textContent = "<strong>Outra coisa</strong>";

console.log(pTextContent.innerHTML);
