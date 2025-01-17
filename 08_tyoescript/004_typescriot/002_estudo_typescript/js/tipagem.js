"use strict";
// * Adicionando tipagem ao JavaScript
let numero = 10; // ? Estamos fazendo de forma manual
let texto = "Anderson"; // ? Estamos fazendo de forma manual
let correta = true; // ? Estamos fazendo de forma manual
let numero2 = 20; // ? Aqui o TypeScript tá fazendo uma inferência de tipo, o que significa que pelo valor atribuído a variável, ele deduziu que o tipo de dado que essa variável poderá receber é "number"
const pi = 3.14; // ! Nesse caso, o TypeScript também irá fazer uma inferência de tipo, porém o tipo dessa variável sera "3.14", pois ele entende que uma constante é inalterada
// * Tipagem do Array
const numeros1 = [1, 2, 3, 4, 5]; // ? Assim nós conseguimos colocar tipagem em um Array
const numeros2 = [1, 2, 3, 4, 5]; // ? Assim nós também conseguimos colocar tipagem em um Array, nesse caso usamos o "generic" do TypeScript, geralmente usado nas versões mais antigas... Falaremos sobre ele mais pra frente
const misto1 = [1, "2", 3, "4", 5]; // ! Podemos criar um Array, porém não é uma boa prática, geralmente, nas linguagens mais robustas, isso não acontece... Mas podemos fazer isso em TypeScript, basteadicionar um "|" entre dois tipos de dados, o que significará que aquela variável poderá receber tanto o tipo "number" quanto o tipo "string", como nesse caso
const misto2 = [1, "2", 3, "4", 5]; // ! podemos criar um array misto dessa forma também, usando o valor "any" que significa "qualquer coisa"... Mas, não é uma boa prática, pois estaremos anulando o TypeScript... Sempre evite usar o "any"
// * Funções de Alta Ordem (map, filter, reduce)
const idades = [10, 22, 13, 34, 45, 18];
console.log(idades.filter((idade) => idade < 18)); // ? Por causa da infência de tipos do TypeScript, não precisamos tipar esses dados
// * Criando Tuplas em TypeScript
// ? O que é Tupla? Tupla é uma lista de valores que não irão mudar, muito ultilizado no Python
const tupla = ["Anderson", 20]; // ? Definimos que esse array sempre terá apenas 2 valores "string" e "number"
// * OBJECTS TYPE
// ? É uma forma nova de definir tipos a um conjunto de dados como um objeto
// * Primeiro vou mostrar um objeto comun
const pessoa = {
    nome: "Anderson",
    idade: 20,
    profissao: "Desenvolvedor",
    altura: 1.6,
    feliz: true,
};
const pessoaInterface1 = {
    nome: "Anderson",
    idade: 20,
    profissao: "Desenvolvedor",
    altura: 1.6,
    feliz: true,
}; // ! Se faltar algum atributo da nossa interface, gerará um erro
const pessoaInterface2 = {
    nome: "Anderson",
    idade: 20,
    altura: 1.6,
    feliz: true,
    // ? O  parâmetro "profissao" não existe nesse objeto
}; // ! Se faltar algum atributo da nossa interface, gerará um erro
const pessoaType1 = {
    nome: "Anderson",
    altura: 1.6,
    idade: 20,
    profissao: "Desenvolvedor",
    feliz: "Sim",
};
// 39 minutos
// * A diferênça do TYPE para o INTERFACE é que o INTERFACE está muito ligado a POO (programação orientada a objeto), e o TYPE muito ligado a tipos de dados genéricos, ou seja, com ele podemos criar um novo tipo de dado. Então básicamente a diferença em em termos semânticos
// * TIPABDO FUNÇÕES
function somar(num1, num2) {
    return num1 + num2;
}
console.log(`A soma de ${10} e ${50} é: ${somar(10, 50)}`);
// ! Esse ultility types será usado para excluírmos quais atributos os novos objetos não receberam
// 01:05:00
