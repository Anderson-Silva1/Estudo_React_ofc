// For Eatch é uma função que serve para percorrer um array
// Ele não retorna nenhum resultado, apenas mostra para nós
// Dentro dele criamos uma função para ser execultada indice por índice do nosso array
// Dentro dessa função terá 3 parâmetros, que são rerspectivamente:
    // 1 - "O ítem" (Pode ser qualquer nome)
    // 2 - "O índice" (Pode ser qualquer nome)
    // 3 - "O array completo" (Pode ser qualquer nome)

const studant = [
    { name: "Anderson", age: 19 },
    { name: "Rafaela", age: 24 },
    { name: "Tanael", age: 21 },
    { name: "Talia", age: 22 },
    { name: "Fernando", age: 30 },
    { name: "Gustavo", age: 40 },
    { name: "Gustavo", age: 40 },
    { name: "Gustavo", age: 40 },
    { name: "Gustavo", age: 40 },
    { name: "Gustavo", age: 40 },
    { name: "Gustavo", age: 40 },
    { name: "Gustavo", age: 40 },
    { name: "Guanabara", age: 43 }
]

// studant.forEach ( (studant, index, array) => {
//     console.log(studant, index);
//     console.log(array)
// } )

// Descobrindo a média das idades das pessoas do nosso array

studant.forEach((studant, index, array) => {
    console.log(`O aluno ${studant.name} tem ${studant.age} anos de idade e está na posição ${index}`)
})


let allStudantAge = 0;

studant.forEach( (aluno, posicao) => {
    allStudantAge += aluno.age;
})

console.log(`A soma das idade de todos os estudantes é de: ${allStudantAge}`)

const averangeAge = allStudantAge / studant.length

console.log(`E a média da idade dos alunos é: ${averangeAge.toFixed(1)}`)

// "toFixed()" vai tirar o decimal dos números dependendo do valor colocado... (0) tira tudo, (1) deixa o 1° descimal, (2) deixa o 2° descimal...

