// OPERADORES DE COMPARAÇÃO

// == -> Igual
{
    let num1 = 10
    let numString = "10"
    let num2 = 20

    console.log(num1 == num2) // Dará False

    console.log(num1 == numString) // Dará True, pois a escrita é igual, esse comando não distingue tipos de dados
}

// === -> Totalmente igual
{
    let num1 = 10
    let numString = "10"
    let num2 = 20

    console.log(num1 == num2) // Dará False

    console.log(num1 == numString) // Dará False, pois esse comando distingue tipos de dados
}

// != 
{
    let num1 = 10
    let numString = "10"
    let num2 = 20
    let num3 = 10

    console.log(num1 != numString) // Dará False, pois a escrita é igual, logo "são" a mesma coisa

    console.log(num1 != num2) // Dará True, pois não são totalmente a mesma coisa
}

// !==
{
    let num1 = 10
    let numString = "10"
    let num2 = 20
    let num3 = 10

    console.log(num1 !== numString) // Dará True, pois não são iguais, por mais que a escrita seja a mesma,o tipo não é.
}

// > -> Maior que...
{
    let num1 = 10
    let num2 = 11
    let num3 = 9

    console.log(num1 > num2) // Retornará False pois, num1 é menos que num2

    console.log(num1 > num3) // Retornará True pois, num1 é maior que num3
}

// >= -> Maior que igual a...
{
    let num1 = 10
    let num2 = 11
    let num3 = 9
    let num4 = 10

    console.log(num1 >= num2) // Retornará False pois, num1 é menos que num2

    console.log(num1 >= num3) // Retornará True pois, num1 é maior que num3

    console.log(num1 >= num4) // Dará True, pois num1 é igual a num4
}

// < -> Menos que...
{
    let num1 = 10
    let num2 = 11
    let num3 = 9

    console.log(num1 < num2) // Retornará True pois, num1 é menos que num2

    console.log(num1 < num3) // Retornará False pois, num1 é maior que num3
}

// <= Menor ou igual a...
{
    let num1 = 10
    let num2 = 11
    let num3 = 9
    let num4 = 10

    console.log(num1 <= num2) // Retornará True pois, num1 é menos que num2

    console.log(num1 <= num3) // Retornará False pois, num1 é maior que num3

    console.log(num1 <= num4) // Dará True, pois num1 é igual a num4
}