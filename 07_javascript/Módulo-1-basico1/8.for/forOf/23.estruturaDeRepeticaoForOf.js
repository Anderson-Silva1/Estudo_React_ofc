// ESTRTURA DE REPETIÇÃO FOR OF

// É parecido com o FOR, porém não precisamos colocar quantas vezes irá se repetir,e irá repetir de forma altomática
// Ele vai interar item por item de uma variável, seja array, numero, string, bolean

{
    // FOR OF em variável
/*
    let firtName = "Anderson"

    for (let name of firtName) { // Variável "name" está assumindo o valor de cada item da variável "fistName"
        console.log(`${name} -> Estamos usando o ForOf para ver quantas letras tem no nome "Anderson"`) // Ele vai execultar em quantas quantas letras tem a string "Anderson",. no caso 8 letras, ou seja, vai execultar 8 vezes.
    }
*/
}

{
    // FOR OF em lista
/*
    let allNames = ['Rafela', 'Emanoel', 'João']

    for (let name of allNames) {
        console.log(name) 
    }
*/
}

console.log("ForOf em um Array")

{

    const alunos = [
        {
            name: "Anderson",
            age: 19,
            // dateNasc: "13/10/2004"
        },
        {
            name: "Rafaela",
            age: 24,
            // dateNasc: "26/10/1999"
        },
        {
            name: "Tadeu",
            age: 39,
            // dateNasc: "01/01/1989"
        }
    ]

    for( teste of alunos ) {
        console.log(teste)
    }

    // Vai percorrer todo os elementos de um array, objeto, variável(Tipo String, number, float ...) ou qualquer outro tipo de dado do JavaScript    
    // Nesse caso um array
}

console.log("") // É apenas para indentar o nosso código
console.log("ForOf em um objeto")

{
    const obj = {
        name: "Anderson",
        age: "19"
    }

    for (elemento in obj) {
        console.log(elemento)
    }

    // Vai percorrer todo os elementos de um array, objeto, variável(Tipo String, number, float ...) ou qualquer outro tipo de dado do JavaScript
    // Nesse caso um objeto
}

console.log("") // É apenas para indentar o nosso código
console.log("ForOf em uma variável do tipo string")

{
    const name = "Anderson"

    for(letra of name) {
        console.log(letra)
    }

    // Vai percorrer todo os elementos de um array, objeto, variável(Tipo String, number, float ...) ou qualquer outro tipo de dado do JavaScript
    // Nesse caso uma variável
}