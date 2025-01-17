// * Ler um arquivo JSON e converter para um Objeto em JavaScript

const fs = require("fs");

// ? lendo arquivo json

console.log(
  fs.readFile("./exemplo.json", (error, dados) => {
    if (error) {
      console.log("Error", error);
    } else {
      const dadosObjeto = JSON.parse(dados);

      console.log(dadosObjeto.parentes);
      console.log(typeof dados);
    }
  })
);

// ! Usamos o comando "JSON.parse()" paraconverter um JSON em objeto no JavaScript

// ? Convertendo um objeto para o padrão JSON

const objJson = { nome: "Tony Stark", papel: "Iron Man" };

console.log(JSON.stringify(objJson));
