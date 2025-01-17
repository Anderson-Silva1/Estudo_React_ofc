"use strict";
class Pessoa1 {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            throw new Error("O número de caracteres está incorreto");
        }
        else if (newCpf.length === 14) {
            // console.log(`CPF mudado de "${this._cpf}" para "${newCpf}"`);
            this.cpf = newCpf;
        }
    }
}
class Banco extends Pessoa1 {
    constructor(nome, idade, cpf, nomeBanco, agencia) {
        super(nome, idade, cpf);
        this.nomeBanco = nomeBanco;
        this.agencia = agencia;
    }
}
class Teste extends Banco {
    constructor(nome, idade, cpf, nomeBanco, agencia, teste) {
        super(nome, idade, cpf, nomeBanco, agencia);
        this.teste = teste;
    }
}
const teste = new Teste("Anderson", 20, "123.456.789-10", "Bradesco", "0001", "Teste 123");
console.log(teste.nome, teste.idade, teste.cpf, teste.nomeBanco, teste.agencia, teste.teste);
teste.cpf = "123.123.123-21";
