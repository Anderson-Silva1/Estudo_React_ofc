/* 
    Nossa Calculadora vai ter 4 operações de inicio: +, -, *, /.
*/

// function sum (number1, number2) {
//     return number1 + number2
// }

// const sub = function(number1, number2) {
//     return number1 - number2
// }

// const mult = (number1, number2) => number1 * number2

// const div = (number1, number2) => number1 / number2

const calculadora = (number1, number2, operacao) => {
  let result = 0;

  switch (operacao) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;

    default:
      result = number1 + number2;
      break;
  }

  return result;
};

const number1 = 10;
const number2 = 2;

console.log(calculadora(number1, number2, "+"));
console.log(calculadora(number1, number2, "-"));
console.log(calculadora(number1, number2, "*"));
console.log(calculadora(number1, number2, "/"));
console.log(calculadora(number1, number2, "x"));

//Esse é o Poder da Functions, escrever apenas uma vez e poder usar quantas vezes quiser...
