// Vaí deletar um ítem do array

const names = ['João', 'Pedro', 'Rafaela', "Anderson"]

delete names[0] // Está deletando o 1° índice do nosso array names

console.log(names)
console.log(names[0])

// OBS: Essa forma de usar os arrays apenas deleta os ítens e não puxa os outros para suprir a posição do ítem deletado... O ítem deletado ficara como undefined 

//Resultado: undefined