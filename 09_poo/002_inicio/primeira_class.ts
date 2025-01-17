// ! Estudar sobre isso depois
interface IPessoa {
  nome: string;
  idade: number;
  altura: number;
  //   cpf: string;

  dormir: () => void;
}

// * Declaramos uma classe "Pessoa"
class Pessoa implements IPessoa {
  // ? Criando os Atributos dessa classe
  nome: string;
  idade: number;
  altura: number;
  private _cpf: string;
  readonly endereco: string;

  // ? Criando o método construtor
  constructor(
    nome: string,
    idade: number,
    altura: number,
    _cpf: string,
    endereco: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = _cpf;
    this.endereco = endereco;
  }

  // ? Criando o método dormir
  dormir() {
    console.log(`${this.nome} dormiu...`);
  }

  // Método usado para conseguirmos ver um atributo Privado
  get cpf(): string {
    return this._cpf;
  }

  // Método usado para conseguirmos atualizar um atributo Privado
  set cpf(newCpf) {
    this._cpf = newCpf;
  }
}

class Professor extends Pessoa {
  codProfessor: string;

  constructor(
    nome: string,
    idade: number,
    altura: number,
    cpf: string,
    endereco: string,
    codProfessor: string
  ) {
    super(nome, idade, altura, cpf, endereco);
    this.codProfessor = codProfessor;
  }

  ensinar() {
    console.log(`Professor ${this.nome} está ensinando...`);
  }
}

const pessoa1 = new Pessoa(
  "Anderson",
  20,
  1.6,
  "123.456.789-00",
  "Avenida Sublime, 300"
);

console.log(pessoa1);
console.log(pessoa1.nome);
pessoa1.dormir();

// pessoa1.endereco = "123";
console.log(pessoa1.endereco);

console.log(pessoa1.cpf);

pessoa1.cpf = "30";

console.log(pessoa1.cpf);

const professor1 = new Professor(
  "Emanoel",
  13,
  1.56,
  "123.123.123-23",
  "Avenida Sublime, 300",
  "00001"
);

professor1.dormir();
professor1.ensinar();

console.log(professor1.cpf);
professor1.cpf = "123.123.231-12";
console.log(professor1.cpf);
