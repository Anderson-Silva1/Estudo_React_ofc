// Funções / Functions em Javascript

// Exemplo de uma função 

// Para daros um console.log fazemos assim:
    // console.log('Hello wolrd');

//  Para fazermos 2 consoles.log fariamos assim:
    // console.log('Hello world')
    // console.log('Hello world')

// Mas podemos usar uma função para fazermos isso pra gente, EX:

    {
        function logHelloWorld() { // Temos que colocar um nome a função, como uma variável, no caso "logHelloWorld"
            console.log('Hello world')
            console.log('Hello world')
        }
        // OBS: O JS por si só, vai ignorar uma função, então precisamos chamá-la

        logHelloWorld() // A maneira mais simples de se chamar uma função é escrevendo o nome dela juntamente com os parênteses 
    }

// Isso nos dá um poder muito grande, principalmente na reutilização de linhas de codigo, tornando mais legível e com um tamanho menor, já que não vamos escrever os codigos novamente.

{
    // Função de contar até 10

    function contarDeUmAteDez() {
        for(let i = 0; i <= 10; i++){
            console.log(i)
        }
    }

    contarDeUmAteDez()
}

