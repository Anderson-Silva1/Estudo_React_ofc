// * Adicionando tipagem ao JavaScript
let numero: number = 10; // ? Estamos fazendo de forma manual
let texto: string = "Anderson"; // ? Estamos fazendo de forma manual
let correta: boolean = true; // ? Estamos fazendo de forma manual

let numero2 = 20; // ? Aqui o TypeScript tá fazendo uma inferência de tipo, o que significa que pelo valor atribuído a variável, ele deduziu que o tipo de dado que essa variável poderá receber é "number"

const pi = 3.14; // ! Nesse caso, o TypeScript também irá fazer uma inferência de tipo, porém o tipo dessa variável sera "3.14", pois ele entende que uma constante é inalterada

// * Tipagem do Array
const numeros1: number[] = [1, 2, 3, 4, 5]; // ? Assim nós conseguimos colocar tipagem em um Array

const numeros2: Array<number> = [1, 2, 3, 4, 5]; // ? Assim nós também conseguimos colocar tipagem em um Array, nesse caso usamos o "generic" do TypeScript, geralmente usado nas versões mais antigas... Falaremos sobre ele mais pra frente

const misto1: (number | string)[] = [1, "2", 3, "4", 5]; // ! Podemos criar um Array, porém não é uma boa prática, geralmente, nas linguagens mais robustas, isso não acontece... Mas podemos fazer isso em TypeScript, basteadicionar um "|" entre dois tipos de dados, o que significará que aquela variável poderá receber tanto o tipo "number" quanto o tipo "string", como nesse caso

const misto2: any[] = [1, "2", 3, "4", 5]; // ! podemos criar um array misto dessa forma também, usando o valor "any" que significa "qualquer coisa"... Mas, não é uma boa prática, pois estaremos anulando o TypeScript... Sempre evite usar o "any"

// * Funções de Alta Ordem (map, filter, reduce)
const idades: number[] = [10, 22, 13, 34, 45, 18];
console.log(idades.filter((idade) => idade < 18)); // ? Por causa da infência de tipos do TypeScript, não precisamos tipar esses dados

// * Criando Tuplas em TypeScript
// ? O que é Tupla? Tupla é uma lista de valores que não irão mudar, muito ultilizado no Python
const tupla: [string, number] = ["Anderson", 20]; // ? Definimos que esse array sempre terá apenas 2 valores "string" e "number"

// * OBJECTS TYPE
// ? É uma forma nova de definir tipos a um conjunto de dados como um objeto

// * Primeiro vou mostrar um objeto comun
const pessoa = {
  nome: "Anderson",
  idade: 20,
  profissao: "Desenvolvedor",
  altura: 1.6,
  feliz: true,
}; // ? Esse é um objeto comum em javaScript

// * INTERFACE
interface PersonaInterface1 {
  nome: string;
  idade: number;
  profissao: string;
  altura: number;
  feliz: boolean;
} // ! Assim é uma interface em TypeScript

const pessoaInterface1: PersonaInterface1 = {
  nome: "Anderson",
  idade: 20,
  profissao: "Desenvolvedor",
  altura: 1.6,
  feliz: true,
}; // ! Se faltar algum atributo da nossa interface, gerará um erro

interface PersonaInterface2 {
  nome: string;
  idade: number;
  profissao?: string; // ? Esse é um parâmetro opcional
  altura: number;
  feliz: boolean;
} // ! Adicionando parÂmetros opcionais, "profissão" não é mais necessário, se quisermos omitir essa informação não gerará um erro

const pessoaInterface2: PersonaInterface2 = {
  nome: "Anderson",
  idade: 20,
  altura: 1.6,
  feliz: true,
  // ? O  parâmetro "profissao" não existe nesse objeto
}; // ! Se faltar algum atributo da nossa interface, gerará um erro

// * TYPE

type Feliz = "Sim" | "Não"; // ? Esse é o UNION TYPE, com ele pódemos unir dois diferêntes valore e passalos como possíveis valores para uma variável ou objeto...

type PersonType1 = {
  nome: string;
  idade: number;
  altura: number;
  profissao: string;
  feliz?: Feliz; // ? Estamos usando aqui o "TYPE ALIASSES, que é pegando um valor que criamos com o TYPE e usando ele na nossa variável, no caso "Feliz" simboliza os dois possíveis resultados criados pelo "UNION TYPE": "Sim" e "Não"
};

const pessoaType1: PersonType1 = {
  nome: "Anderson",
  altura: 1.6,
  idade: 20,
  profissao: "Desenvolvedor",
  feliz: "Sim",
};

// 39 minutos

// * A diferênça do TYPE para o INTERFACE é que o INTERFACE está muito ligado a POO (programação orientada a objeto), e o TYPE muito ligado a tipos de dados genéricos, ou seja, com ele podemos criar um novo tipo de dado. Então básicamente a diferença em em termos semânticos

// * TIPABDO FUNÇÕES
function somar(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(`A soma de ${10} e ${50} é: ${somar(10, 50)}`);

// * ULTILITY TYPE
// ? É aidéia de construir outros TYPES baseados em outros TYPES
type Pessoa = {
  nome: string;
  idade: number;
  sobreNome?: string;
};

// ? Partial
type PersonPartial = Partial<Pessoa>;
// ! Esse ultility type transforma todos os valores de um type em valores opcionais, que não precisam ser declarados

// ? Partial
type PersonRequired = Required<Pessoa>;
// ! Esse ultility type transforma todos os valores de um type em valores requiridos, que precisam ser declarados

// ? Pick
type PersonPicked = Pick<Pessoa, "nome" | "idade">;
// ! Esse ultility types será usado para esclhermos quais atributos os novos objetos receberam

// ? Omit
type PersonaOmit = Omit<Pessoa, "nome">;
// ! Esse ultility types será usado para excluírmos quais atributos os novos objetos não receberam

// ? Omit
type PersonaExclude = Exclude<Feliz, "Não">;
// ! Esse ultility types será usado para excluírmos quais atributos os novos objetos não receberam, nesse caso pegamos o Union Type "Feliz" e tiramos o "Não", agora só temos o "Sim"

// ? Omit
type PersonaRecord = Record<string, Pessoa>;
// ! Esse ultility types é usado para criar um objeto apartir de outro objeto, no nosso caso, teremos uma string como sendo a chave e o Type Pessoa para ser o valor dessa chave

const personaRecord: PersonaRecord = {
  "123.456.789-00": {
    nome: "Anderson",
    idade: 20,
    sobreNome: "Silva",
  },
}; // ! Fazendo uma análogia sobre isso, podemos pensar que a chave "string" será um CPF, e o valor dessa chave (type "Pessoa") será os atributos desse objeto
