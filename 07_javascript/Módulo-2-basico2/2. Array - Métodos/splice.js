//  Splice (unir/ligar) -> Ele permite que a gente tire ítens do nosso array exatamente onde a gente quer ou coloque ítens no nosso array exatamente na posição que a gente quer

const names = ['João', 'Pedro', 'Rafaela', "Anderson", 'Joana', 'Fernando', 'Lucas']

// No splice temos 2 parâmetros: o primeiro parâmetro se refere ao indice do ítem que a gente vai querer tirar, e o segundo parâmetro é quantos ítens vão ser tirados

// Exemplo em forma cascata

// console.log(`Nosso array: ${names}`)
// console.log("")

// names.splice(0,1) // Nesse caso estamos tirando o "João"

// console.log(`O index "0" agora é: ${names[0]}`) // Resultado: Pedro
// console.log("Temos " + names.length + " Ítens")
// console.log("")

// names.splice(0,2) // Estamos apagando o "Pedro" e a "Rafaela"

// console.log(names) // Resultado: [ 'Anderson', 'Joana', 'Fernando', 'Lucas' ]
// console.log("Temos " + names.length + " Ítens")
// console.log("")

// names.splice(0,1, "Gustavo") // Estamos Tirando o "Anderson" e colocando o "Gustavo"

// console.log(names) // Resultado: [ 'Gustavo', 'Joana', 'Fernando', 'Lucas' ]
// console.log("Temos " + names.length + " Ítens")
// console.log("")

// names.splice(0,0, "Lucas") // Aqui estamos adicionando o ítem "Gustavo" e adicionando o ítem "Lucas"

// console.log(names) // Resultado: [ 'Lucas', 'Gustavo', 'Joana', 'Fernando', 'Lucas' ]
// console.log("Temos " + names.length + " Ítens") // Temos no caso agora 5 ítens nesse array
// console.log("")

// {
//     // Adicionando ítens ao array:

//     Explicando: names.splice(0/* Índice inicial para modificação  */,0 /* Quantos ítens serão modificados, no caso 0, o que vai apernas adicionar */, "Lucas" /* O ítem que vai ser adicionado ao Array */)
// }

const retirar = names.splice(0,2)

console.log(names)
console.log(retirar)