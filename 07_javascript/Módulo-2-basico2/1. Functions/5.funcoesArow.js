//  ARROW FUNCTIONS

// Aroww -> Flexas

// É uma forma resumida de chamar um aFunção

{
    // Jeito de chamar função 1:

    function sum (number1, number2) {
        const sum = number1 + number2
        return sum
    } 

    console.log(`Função usando o metodo 1 ${sum(2,4)}`)
}

{
    // Jeito de chamar função 2 (Função Anônima)

    const sum = function(number1, number2){
        const sum = number1 + number2
        return sum
    }

    const num1 = 10
    const num2 = 20
    const somaTeste = sum(num1, num2)   
    console.log (`Função usando o método 2(Functions Anonimous) ${somaTeste}`)
}

{
        // Jeito de chamar função 3 (ARROW)

        const sum = (number1, number2) => number1 + number2

        const number1 = 10
        const number2 = 30

        console.log(`Functions usando o metordo 3(Arrow), colocando os valores manualmente: ${sum(1, 10)}`)
        console.log(`Functions usando o metordo 3(Arrow), colocando os valores em forma de outras variáveis: ${sum(number1, number2)}`)

        // Uma das vantagens do Arrow alem de diminuir a linha de código é que não precisamos usar o atributo return, ela por si só já retorna o resultado

}

{
    // Se tivermos mais parâmetros ainda poderemos usar a Função Arrow, mas precisaremos dar um amodificada:


            const sum = (number1, number2) => {
                return number1 + number2
            }

            const number1 = 10
            const number2 = 30
    
            console.log(`Functions usando o metordo 3(Arrow), colocando os valores manualmente(Com mais parâmetros): ${sum(1, 10)}`)
            console.log(`Functions usando o metordo 3(Arrow), colocando os valores em forma de outras variáveis(com mais parâmetros): ${sum(number1, number2)}`)

            // Quando usamos dessa forma, o Arrow perde a sua funcionalidade de não precisar usar o return, se não ele retornará undefined...
    
}

{
        // Se tivermos um  parâmetros ainda poderemos usar a Função Arrow, mas precisaremos dar um amodificada:


        const sum = number1 => {
            return number1
        }

        const number1 = 10

        console.log(`Functions usando o metordo 3(Arrow), colocando os valores manualmente(Com um parâmetros): ${sum(10)}`)
        console.log(`Functions usando o metordo 3(Arrow), colocando os valores em forma de outras variáveis(com um parâmetros): ${sum(number1)}`)

        // Quando usamos dessa forma, o Arrow perde a sua funcionalidade de não precisar usar o return, se não ele retornará undefined...

}

{
        // Se não tivermos parâmetros ainda poderemos usar a Função Arrow, mas precisaremos dar um amodificada:


        const sum = () => {
            let number1 = 1029
            return number1
        }

        const number1 = 10
        const number2 = 30

        console.log(`Functions usando o metordo 3(Arrow), colocando os valores manualmente(Com mais parâmetros): ${sum()}`)
        console.log(`Functions usando o metordo 3(Arrow), colocando os valores em forma de outras variáveis(com mais parâmetros): ${sum()}`)

        // Quando usamos dessa forma, o Arrow perde a sua funcionalidade de não precisar usar o return, se não ele retornará undefined...

}

// OBS USE ARROW FUNCTIONS pous a maioria dos programadores usam Arrow Functions