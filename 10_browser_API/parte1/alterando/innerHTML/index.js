const pInnerHTML = document.querySelector("p#pInnerHTML");

console.log(pInnerHTML.innerHTML); //Pega os textos e os elementos

pInnerHTML.innerHTML = "<strong>Outra Coisa</strong>";

console.log(pInnerHTML.innerHTML);
