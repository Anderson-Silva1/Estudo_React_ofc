// MAP:
// - Cria um novo array, apartir do array percorrido (Array original)
// - Cria um novo array, com a mesma quantidade de ítensdo array original
// - Aceita 3 parâmetros:
// - Ítem do array
// - Índex
// - Array completo

const number = [1, 2, 3, 4];
const studant = [
  { name: "Anderson", age: 19 },
  { name: "Rafaela", age: 24 },
  { name: "Tanael", age: 21 },
  { name: "Talia", age: 22 },
  { name: "Fernando", age: 30 },
  { name: "Gustavo", age: 40 },
];

{
  const newArrayNumber = number.map(
    (number /* Está representanbdo os ítens do array */) => {
      // Criamos uma nova variável para receber o novo array
      return number * 2; // Está pegando cada ítem do Array e multiplicando por 2
      // Resultado [ 2, 4, 6, 8 ]
    }
  );
}

const newArrayStudant = studant.map((studant) => {
    const newStudant = {
        name: studant.name + " da Silva",
        age: studant.age - 5,
    }

    return newStudant
})

console.log(studant)
console.log(newArrayStudant)