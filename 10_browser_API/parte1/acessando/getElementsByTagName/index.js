const h1TagName = document.getElementsByTagName("h1");

console.log(h1TagName); // ? Mostra o HTMLCollection
console.log(h1TagName.length); // Tanto de tags que exixtem no DOM
console.log(h1TagName[0].innerHTML); // Mostra o texto da Tag
console.log(h1TagName[1].textContent); // Mostra o texto da Tag
console.log(h1TagName[2].className); // Mostra as classes
console.log(h1TagName[3].id); // Mostra o ID
console.log(h1TagName[4]);
console.log(h1TagName[5]);
console.log(h1TagName[6]); //! undefinded: pois não existe!!!!

document.getElementsByClassName;
