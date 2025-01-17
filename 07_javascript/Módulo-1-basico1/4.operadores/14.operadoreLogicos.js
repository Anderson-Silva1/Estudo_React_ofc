// OPERADORES LÓGICOS

// && -> E (FILHO OBEDIENTE)
// true && true = true -> Pai e mae deixou o menino sair, filho foi
{
    let pai = true
    let mae = true
    let filho = pai && mae

    console.log(filho)
}

// true && false = false -> pai deixou mas a mãe não deixou o filho sair, filho não foi
{
    let pai = true
    let mae = false
    let filho = pai && mae

    console.log(filho)
}

// false && false = false -> pai e mãe não deixaram o filho sair = filho não foi
{
    let pai = false
    let mae = false
    let filho = pai && mae

    console.log(filho)
}

// || -> OU (FILHO ESPERTINHO)
// true && true = true -> Pai e mae deixou o menino sair, filho foi
{
    let pai = true
    let mae = true
    let filho = pai || mae

    console.log(filho)
}

// true && false = false -> pai deixou mas a mãe não deixou o filho sair, filho foi pq o pai deixou
{
    let pai = true
    let mae = false
    let filho = pai || mae

    console.log(filho)
}

// false && false = false -> pai e mãe não deixaram o filho sair = filho não foi
{
    let pai = false
    let mae = false
    let filho = pai || mae

    console.log(filho)
}

// ! -> NEGAÇÃO (FILHO REBELDE)
// true && true = true -> Pai e mae deixou o menino sair, filho não foi
{
    let pai = !true
    let mae = !true
    let filho = pai && mae

    console.log(`Rebelde ${filho}`)
}

// true && false = false -> pai deixou mas a mãe não deixou o filho sair, depende do operador... se for o && o filho não foi, se foi o || o filho foi
{
    let pai = !true
    let mae = !false
    let filho = pai && mae

    console.log(`Rebelde usando o &&: ${filho}`)
}

{
    let pai = !true
    let mae = !false
    let filho = pai || mae

    console.log(`Rebelde usando o ||:${filho}`)
}

// false && false = false -> pai e mãe não deixaram o filho sair = filho foi
{
    let pai = !false
    let mae = !false
    let filho = pai && mae

    console.log(`Rebelde ${filho}`)
}


// O operador lógico ! funciona de forma contrária, ou seja: true se torna false e false se torna true

{
    let sim = !true
    let nao = !false

    console.log(`Com o ! o sim se torna ${sim}`)
    console.log(`Com o ! o não se torna ${nao}`)
}