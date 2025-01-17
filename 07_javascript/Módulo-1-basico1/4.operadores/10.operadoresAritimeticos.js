// Temos os seguintes operadores aritiméticos:

//     + -> Adição
{
    let num1, num2, soma;
    num1 = 10;
    num2 = 20;

    soma = num1 + num2
}
//     - -> Subtração
{
    let num1, num2, subtração;
    num1 = 10;
    num2 = 20;

    subtração = num1 - num2
}
//     * -> Multiplicação
{
    let num1, num2, mult;
    num1 = 10;
    num2 = 20;

    mult = num1 * num2
}
//     / -> Divisão
{
    let num1, num2, divisao;
    num1 = 10;
    num2 = 20;

    divisao = num1 / num2
}
//     % -> Resto de uma divisão
{
    let num1, num2, resto;
    num1 = 11;
    num2 = 20;

    resto = num2 % num1

    // Retorna o resto de uma divisão, se a divisõ for exata ele vai retornarr o valor 0
}

//     ++ -> Incremento
{
    let num1;
    num1 = 10;
    num1++
    num1++
    num1++
    num1++
    // Nesse caso ele atribui depois
    // No final, o valor da variável num1 será 14

    // Outro tipo de incremento é usar o ++ antes da variável ou número

    let num2 = 10
    console.log(num2)
    ++num2

    // Nesse caso ele atribui primeiro
}

//     -- -> Decremento
{
    let num1;
    num1 = 10;
    num1--
    num1--
    num1--
    num1--

    // No final, o valor da variável num1 será 6
}

//     ** -> Expenenciação


{
    let num1, num2, exponente;
    num1 = 10;
    num2 = 20;

    exponente = num2 ** num1

    // Retorna o o valor da conta: 10.240.000.000.000
}