// Serve para adicionar novos ítens no nosso array

const names = ['João', 'Pedro', 'Rafaela', "Anderson"]

names.push('Fernando')
names.push("Gabriel", 'Lucas', `Paulo`)
names.unshift("Jonas")
// OBS: Será adicionado no final do array

console.log(names)

// Resultado: [ 'João',  'Pedro', 'Rafaela',  'Anderson', 'Fernando', 'Gabriel', 'Lucas', 'Paulo' ]