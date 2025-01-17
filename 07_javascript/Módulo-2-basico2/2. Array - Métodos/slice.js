// Slice (fatiar) permite selecionarmos determinada parte do nosso array para usar
// Ele cria um novo array, por isso temos que criar uma nova variável

const names = ['João', 'Pedro', 'Rafaela', "Anderson", 'Mateus', 'Lucas', 'Fernando']

const newNames = names.slice(1) // Ele selecionou do índice 1 ("Pedro") até o último índice
console.log("Fatiamos a lista do Pedro até o ultimo nome:")
console.log(newNames)
console.log(`Temos agora um array de ${newNames.length} ítens`)
console.log("")

const newNames2 = names.slice(1,4) // Nesse caso selecionamos do ítem 1 (Pedro) até o ítem 4 do ARRAY names que é "Anderson"
console.log("Fatiamos a lista do Pedro até o índice 4 do nosso ARRAY names:")
console.log(newNames2)
console.log(`Temos agora um array de ${newNames2.length} ítens`)
console.log("")

const newName3 = names.slice(4,1)
console.log(newName3)
console.log("Não é possível fatiar um array usando o método slice de um índice maior para um menor, não i´ra aparecer nada")
