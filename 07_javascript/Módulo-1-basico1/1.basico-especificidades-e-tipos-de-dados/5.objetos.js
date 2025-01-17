// OBJETOS

// Conjunto de variáveis dentro de uma variável

// Variável normal

const nameAnderson = 'Anderson';
const ageAnderson = 19;
const genero = "Masculino"

// Objeto:

const love = {
    nameRafaela: 'rafaela',
    ageRafaela: 24,
    adrees: {
        // Podemos criar objetos dentro de objetos
        street: "Rua serena",
        number: 103
    },
    text1: 1,
    text2: 2
};

console.log(love)

// Podemos acessar os índices

console.log(love.ageRafaela)

// Podemos acessar o indice dos indices

console.log(love.adrees.street)
