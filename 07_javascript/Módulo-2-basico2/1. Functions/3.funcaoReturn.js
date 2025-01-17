// FUNÇÕES

// RETURN

{
    function sum(number1, number2) {
        console.log(number1 + number2)
    }

    // Podemos colocar variáveis dentro dos ^PARÂMETROS  da nossa Função

    const firstNumber = 20
    const seccondNumber = 30

    console.log(firstNumber + seccondNumber) // Aprendemos a fazer a soma dessa forma, chamando ela diretamente, mas agora vamos colocar essas consts dentro dos PARÂMETROS da Função "sum()"

    console.log(sum(firstNumber, seccondNumber)); // Vejamos que dessa form,a vai dar um erro... "undefined" ou "indefinido", pq isso acontece, pq a nossa função não esta retornando nada para quem chama ela... Ela da o resultado por si só, ou seja se chamarmos ela própria, mas se alguém chamar ela, não vai rceber nada... Então pra isso usamos o atributo "return", que vai retornar um resultado pra quem chamar a função... Veja no escoco a baixo 
}

{
    function sum(number1, number2) { // Criamos 2 Parâmetros
        const result = number1 + number2 // Criamos uma variável const result recebendo a soma dos Parâmetros
        return result // Retornamos a variável result para quem chamar a função "sum()"
    }

    const firstNumber = 10 // Declarando variável
    const seccondNumber = 30 // Declarando variável

    console.log(`O resuntado da soma de ${firstNumber} e ${seccondNumber} é ${sum(firstNumber, seccondNumber)}`) // Chamando a função "sum("com os argumentos sendo variáveis")"
}

{
    // Entendemso mais sobre o Return

    function sum(number1, number2) { 
        const result = number1 + number2 
        return "Banana" // Podemos retornar qualquer coisa
    }

    const firstNumber = 10 
    const seccondNumber = 30 

    console.log(`O resuntado da soma de ${firstNumber} e ${seccondNumber} é ${sum(firstNumber, seccondNumber)}`) // Aqui ele vai chamar a string "Banana", pois é isso que tem lá em return da nossa função

}