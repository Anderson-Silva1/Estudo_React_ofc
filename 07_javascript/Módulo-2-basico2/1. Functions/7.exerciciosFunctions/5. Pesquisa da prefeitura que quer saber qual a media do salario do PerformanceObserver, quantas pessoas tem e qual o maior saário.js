// Pesquisa da prefeitura que quer saber qual a media do salario do PerformanceObserver, quantas pessoas tem e qual o maior saário
/* 
    A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: 
        - média do salário da população; 
        - média do número de filhos; - maior salário; 
        - O final da leitura de dados se dará com a entrada de um salário negativo. 
        - Faça isso usando uma função!
*/

// Lista de Arays

const pessoas = [
    {
        numberChildrem: "1",
        salario: 1000
    },
    {
        numberChildrem: "5",
        salario: 4000
    },
    {
        numberChildrem: "4",
        salario: 7000
    },
    {
        numberChildrem: "0",
        salario: 1000
    },
    {
        numberChildrem: "1",
        salario: 2000
    },
    {
        numberChildrem: "3",
        salario: -4000
    },
]

function pesquisaDaCidade(pessoasInformacao) {

    let mediaSalario = 0;
    let mediaCrianca = 0;
    let maiorSalario = 0;

    for(let i = 0; i <= pessoasInformacao.len ; i++){

        const salaio = pessoasInformacao[i].salario
        const crianca = pessoasInformacao[i].numberChildrem

        if (maiorSalario) {
            
        }

    }

}

console.log(pesquisaDaCidade(pessoas))

// vamos aprender a armazenar um valor em uma variável...
