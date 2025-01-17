{
  // Faça um programa que compare um número com 10 e imprime na tela "Esse número é maior, menor e igual"

  let number = 10;

  if (number == 10) {
    console.log(`Esse número (${number}) é igual a 10`);
  } else if (number < 10) {
    console.log(`Esse número (${number}) é menor que 10`);
  } else if (number > 10) {
    console.log(`Esse número (${number}) é maior que 10`);
  } else {
    console.log(`${number} não é um número`);
  }
}

console.log("");

{
  // Faça um programa que identifique se a pessoa é brasileira ou não (usando IF, ELSE IF e ELSE)

  let nacionalidadeBrasil = "BRA";
  let nacionalidadeEua = "EUA";

  let joao = "BRA";

  if (joao == nacionalidadeBrasil) {
    console.log("João é Brasileiro");
  } else if (joao == nacionalidadeEua) {
    console.log("João não é Brasileiro");
  }
}

console.log("");

{
  // Criar um programa que crie um número aleatório, que compare com o número ganhador, e caso seja verdade, printar a mensagem "Você ganhou" ou não.

  // gerando um número aleatório

  let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
  let winnerNumber = Math.floor(Math.random() * (10 - 1) + 1);

  // Verificando se é verdade

  if (randomNumber == winnerNumber) {
    console.log(
      `Número sorteado: ${randomNumber}, Número do ganhador ${winnerNumber}, você ganhou!!! `
    );
  } else {
    console.log(
      `Número sorteado: ${randomNumber}, Número do ganhador: ${winnerNumber}, você não ganhou!!! `
    );
  }
}

console.log("");

{
  // Escreva um programa que receba 3 números inteiros, e imprima qual é o maior e menos

  // Usando IF, ELSE IF e ELSE

  let numberOne, numberTwo, numberThree;
  numberOne = 10;
  numberTwo = 20;
  numberThree = 30;

  if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(`${numberOne} é o maior número`);
  } else if (numberOne < numberTwo && numberOne < numberThree) {
    console.log(`${numberOne} é o menor número`);
  } else {
  }

  if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log(`${numberTwo} é o maior número`);
  } else if (numberTwo < numberOne && numberTwo < numberThree) {
    console.log(`${numberTwo} é o menor número`);
  } else {
  }

  if (numberThree > numberOne && numberThree > numberTwo) {
    console.log(`${numberThree} é o maior número`);
  } else if (numberThree < numberOne && numberThree < numberTwo) {
    console.log(`${numberThree} é o menor número`);
  } else {
  }
}

console.log("");

{
  // 5 Objetos com 5 valores, e dizer se está aprovado ou não
  // Para ser aprovado precisa ser maior de idade e ser brasileiro

  let person1 = {
    name: "Anderson",
    age: 19,
    sex: "male",
    profision: "Dev FrontEnde",
    nationality: "brasil",
  };

  let person2 = {
    name: "Rafela",
    age: 24,
    sex: "Femi",
    profision: "Professora",
    nationality: "brasil",
  };

  let person3 = {
    name: "João",
    age: 22,
    sex: "male",
    profision: "Medico",
    nationality: "mexico",
  };

  let person4 = {
    name: "Emanoel",
    age: 12,
    sex: "male",
    profision: "Medico",
    nationality: "brasil",
  };

  let person5 = {
    name: "Tanael",
    age: 22,
    sex: "male",
    profision: "Empresário",
    nationality: "brasil",
  };

  if (person1.age >= 18 && person1.nationality == "brasil") {
    console.log(`${person1.name} está aprovado`);
  } else {
    console.log(`${person1.name} não está aprovado`);
  }

  if (person2.age >= 18 && person2.nationality == "brasil") {
    console.log(`${person2.name} está aprovado`);
  } else {
    console.log(`${person2.name} não está aprovado`);
  }

  if (person3.age >= 18 && person3.nationality == "brasil") {
    console.log(`${person3.name} está aprovado`);
  } else {
    console.log(`${person3.name} não está aprovado`);
  }

  if (person4.age >= 18 && person4.nationality == "brasil") {
    console.log(`${person4.name} está aprovado`);
  } else {
    console.log(`${person4.name} não está aprovado`);
  }

  if (person5.age >= 18 && person5.nationality == "brasil") {
    console.log(`${person5.name} está aprovado`);
  } else {
    console.log(`${person5.name} não está aprovado`);
  }
}

console.log("");

{
  // nota de jurados usando o IF, ELSE e ELSE IF.

  let nota = 10;

  if (nota == 0) {
    console.log("Não gostei de jeito nenhum da sua presentação!!!, muito ruim");
  } else if (nota == 1) {
    console.log("Não gostei de jeito nenhum da sua presentação!!!");
  } else if (nota == 2) {
    console.log("Não gostei da sua apresentaçãono final foi  ruim");
  } else if (nota == 3) {
    console.log("Não achei legal");
  } else if (nota == 4) {
    console.log("Não gostei tanto da sua apresentação");
  } else if (nota == 5) {
    console.log("Não gostei");
  } else if (nota == 6) {
    console.log("Gostei, mas poderia melhorar");
  } else if (nota == 7) {
    console.log("Gostei da sua apresentação, foi mediana");
  } else if (nota == 8) {
    console.log("Gostei da sua apresentação");
  } else if (nota == 9) {
    console.log("Gostei da sua apresentação, top");
  } else if (nota == 10) {
    console.log("Gostei muito da sua apresentação!!!");
  } else {
    console.log("Escolha uma nota inteira de 0 - 10");
  }
}

console.log("");

{
  // Descobrindo se um número é impar ou par

  // Todo número par quando é dividido por 2, dá o resultado de resto 0

  let number = 1;

  if (number % 2 === 0) {
    console.log(`${number} é par`);
  } else {
    console.log(`${number} é ímpar`);
  }
}

console.log("");

{
  // Programa para descobrir se um número é par ou imppar, primo e ímar, multiplo de 5 e par

  // Acrescentado -> Se o número for apenas ímpar ou apenas Primo, ele irá dizer

  // Acrecentamento -> Se o número for apenas par ou apenas diviível por 5, ele irá dizer

  let number = 1;

  // par ou impar

  if (number % 2 === 0) {
    console.log(`${number} é par`);
  } else {
    console.log(`${number} é ímpar`);
  }

  //primo e ímpar

  if (
    number % 1 === 0 &&
    number % number === 0 &&
    number % 2 !== 0 /* Mostra se o núm,ero é ímpar*/
  ) {
    console.log(`${number} é ímpar e primo`);
  } else if (number % 1 === 0 && number % number === 0) {
    console.log(`${number} é apenas primo`);
  } else if (number % 2 !== 0) {
    console.log(`${number} é apenas Impar`);
  } else {
    console.log(
      `${number} não se encaixa nos pré-requisitos, que é ser um número ímpar e primo`
    );
  }

  // multiplo de 5 e par

  if (number % 5 === 0 && number % 2 === 0) {
    console.log(`${number} é um número par e múltiplo de 5`);
  } else if (number % 5 === 0) {
    console.log(`${number} é apenas um número diviível por 5`);
  } else if (number % 2 === 0) {
    console.log(`${number} é apenas um número par`);
  } else {
    console.log(`${number} não é um número par e diviível por 5`);
  }
}

console.log("");

{
  // Ler 4 números e diser caso seja verdade, "TODOS OS NÚMEROS SÃO PARES" ou ""TODOS OS NÚMEROS SÃO ÍMPARES".

  let number1, number2, number3, number4;
  number1 = 10;
  number2 = 10;
  number3 = 10;
  number4 = 10;

  if (
    number1 % 2 === 0 &&
    number2 % 2 === 0 &&
    number3 % 2 === 0 &&
    number4 % 2 === 0
  ) {
    console.log("TODOS OS NÚMEROS SÃO PARES");
  } else if (
    number1 % 2 !== 0 &&
    number2 % 2 !== 0 &&
    number3 % 2 !== 0 &&
    number4 % 2 !== 0
  ) {
    console.log("TODOS OS NÚMEROS SÃO ÍMPRES");
  } else {
    console.log("NUMEROS MISTURADOS");
  }
}
