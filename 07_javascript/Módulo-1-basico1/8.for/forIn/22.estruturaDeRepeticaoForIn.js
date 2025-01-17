// ESTRUTURA DE REPETIÇÃO FOR IN

// É bem parecido com o FOR OF, Enquanto o FOR OF intera item por item, o FOR IN vai interar as propriedades de um Objeto até terminar todos

{

    let person = {
        name: 'Anderson',
        age: 19,
        sex: 'Male',
        adrees: 'rua serena'
    }

    for (propety in person){
        console.log(propety) // Esse for In vai mostra na tela cada propriedade do objeto person
    }

}

console.log("")

{
    let person = {
        name: 'Anderson',
        age: 19,
        sex: 'Male',
        adrees: 'rua serena'
    }

    for (propety in person){
        console.log(`${propety}: ${person[propety]}`) //  Esse for In vai mostra na tela cada propriedade e seus respectivos valores do objeto person
    }

}