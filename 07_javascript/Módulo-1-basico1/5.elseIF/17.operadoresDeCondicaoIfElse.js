// Operadores de Condição If Else

// IF -> SE
// Else -> SE NÃO
{
    let name = "Anderson"
    let name2 = "Rafaela"
    let result = "Correto"
    let result2 = "Não correto"
  
    if(name == name2) {
      console.log(result)
    } else {
      console.log(result2)
    }
  
    // Nesse caso retornará "Nao correto", pois Anderson não é igual a Rafaela
  }
  
  // Else if -> SE NÃO, SE
  {
    let name = "Anderson"
    let name2 = "Rafaela"
    let name3 = "Anderson"
    let result = "Correto"
    let result2 = "Não correto"
  
    if (name == name2) {
      console.log(result, + "name é igla ao name2")
    } else if (name == name3) {
      console.log(result2)
    } else {
      console.log("Resultado impossível de calcular")
    }
  
    // nesse casi ele vai continuar a condicao usando o else if, caso o id nao seja correto ou verdadeiro, ele vai ver do else if... podemos ter muitos esle if, mas sempre devemos começar com um if e terminar com um else, e devemoa ter um if e um else na nossa condição.
  }
  
  {
    let febre = 38;
  
    if (febre > 38) {
      console.log("Essa pessoa está com febre")
    } else if (febre == 38) {
      console.log("Essa pessoa esta com indícios de febre")
    } else {
      console.log("Essa pessoa não está com febre")
    }
  
    // Programa onde se a variável febre for maior que 38, ira aparecer a mensagem "Essa pessoa esta com febre"...
    // se febre for igual a 38 "Essa pessoa esta com indicios de febre"
    // se febre for menos que 38 "Essa pessoa nao esta com febre"
  }

  {
    // teste IMC

    const peso = 50
    const altura = 1.65

    const imc = peso / altura**2

    if (imc >= 19 && imc <= 24) {
        console.log(`Você está com o peso saldavel, seu imc é de ${imc}`)
    } else if (imc < 19 ) {
        console.log(`Você está a baixo do peso, seu imc é de ${imc}`)
    }
    else if (imc > 24) {
        console.log(`Você está a cima do peso, seu imc é de ${imc}`)
    }
  }