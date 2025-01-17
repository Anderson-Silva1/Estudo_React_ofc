// FLUXO DE CONTROLE COM SWITH CASE

// O switch é uma estrutura de controle de fluxo que permite avaliar uma expressão e, dependendo do valor dessa expressão, executar diferentes blocos de código. É especialmente útil quando você tem uma variável que pode ter diferentes valores e você quer executar diferentes ações com base nesses valores.

{
  let numberOne = 10;

  switch (numberOne) {
    case 20:
      console.log("Certo1"); // Caso a intrução Swith(numberOne) seja igual a Case(20) a cima, vai ser execultado esse código
      break; // Comando que para a execução do código, não podemos nos esquecer dele, pois se não o comando continuará sendo execultado

    case 10:
      console.log("Certo2");
      break;
  }
}

{
  // Temperatura

  // FLUXO DE CONTROLE COM SWITH CASE

  let temperatura = 39;

  switch (temperatura) {
    case 36:
      console.log("Temperatura Normal");
      break;

    case 37:
      console.log("Quase com febre");
      break;

    case 38:
      console.log("Com febre");
      break;

    case 39:
      console.log("Com muita febre, procure um hospital");
      break;

    default:
      console.log("Não conseguimos calcular a sua temperatura");
  }
}
