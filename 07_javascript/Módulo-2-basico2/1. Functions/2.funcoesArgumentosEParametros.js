// FUNÇÕES 

// ARGUMENTOS E FUNÇÕES

{
    // Criando uma função SOMA

    function sum(number1, number2 /* Aqui dentro fica os PARÂMETROS... OBS: Posso ter "1", "0" ou "30" PARÂMETROS, não há um limite... */) {
        console.log(number1 + number2)
    }

    
    sum(/* Aqui dentro ficará os nossos ARGUMENTOS, que foram colocados nos PARÂAMETROS na nossa função... */ 10 /* Esse é nosso primeiro ARGUMENTO, que está sendo relacionado com o PARÂMETRO "number1" da nossa função "sum()" */,20 /* Esse é nosso segundo Argumento */) //Invoca nossa função, Chama nossa função, ou do inglês -> Invoke of Call 

    // Função reutiliza código, ou seja posso usar essa função quantas vezes eu quiser

    sum(100, 200); // Os ARGUMENTOS são separados por ","

    sum(1,2);
}