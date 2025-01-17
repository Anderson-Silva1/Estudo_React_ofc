const tabuada = (number) => {
    if (number < 1 || number > 10) {
        return console.log('Só aceitamos, SOMENTE números de 1 até 10')
    }

    for(let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}

tabuada(5)