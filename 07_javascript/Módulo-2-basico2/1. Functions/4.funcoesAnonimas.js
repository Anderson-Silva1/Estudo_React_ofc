//  FUNÇÕES ANONIMAS

{
    // IMC usando FUNÇÔES normais    

    function imc(altura, peso) {
        const altura2 = altura ** 2
        const imc = peso / altura2

        return Math.ceil(imc) // Arredonda um número inteiro a cima 
    }

    const altura = 1.65
    const peso = 50
    const imc2 = imc(altura, peso)

    console.log(`Olá Anderson, seu IMC é ${imc2}`)
}

{
    {
        // IMC usando FUNÇÔES anonimas...
        // Atribuem a função a uma variável
        // Algumas pessoas usam dessa forma...

        const imc = function (altura, peso) {
            const altura2 = altura ** 2
            const imc = peso / altura2

            return Math.ceil(imc) // Arredonda um número inteiro a cima 
        }

        const altura = 1.65
        const peso = 50
        const imc2 = (altura, peso)

        console.log(`Olá Anderson, seu IMC é ${imc2}`)
    }
}

{
    var soma = function(num1, num2){
        return num1 + num2
    }
    
    var number1 = 10
    var number2 = 20
    
    console.log(soma(number1, number2))
}

// OBS: Tanto na forma normal de criar uma função quanto na forma Anônima (Atyribuimndo a fimnção a uma variável) p´recisaremos chamá-la, seja eça variável ou função e colocar os parâmetros, seja emes digitados manualmente ou em forma de outra variável 