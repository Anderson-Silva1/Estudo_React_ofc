// Deletar os index's 1,3,6,8 do array

const numbers = [1,3,4,2,3,7,5,2,6,8,9]

const numbersDelete = ( delete numbers[1], delete numbers[3], delete numbers[6], delete numbers[8] )

console.log(`Array depois dos delete's: ${numbers}`)
console.log(numbers)
console.log("")

// Coloque todos na ordem

const numbers2 = [1,3,4,7,5,2,6,8,9]

numbers2.sort()
console.log(`Array em ordem crescente: ${numbers2}`)
console.log("")

// Dessa ordem peque o o número 4 e coloque 0 número 4,5

numbers2.splice(4,0,4.5)

console.log(`Adicionando o 4,5 no array: ${numbers2}`)
console.log("")

// Desse array pegue apenas a parte do número 3 até o número 8

const newNumber2 = numbers2.splice(2,7)
console.log(`Pegando do 3 até o 8: ${newNumber2}`)