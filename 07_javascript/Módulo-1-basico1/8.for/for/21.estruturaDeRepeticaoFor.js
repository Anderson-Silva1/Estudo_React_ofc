// ESTRUTURA DE REPETIÇÃO USANDO O FOR

// Servem para facilitar nossa vida, pana não escrevermos código por código até o resultado, no caso escrevemos apenas um e ele vai se repetir até o resultado

/* Se formos contar até 10, sem usar laços de repetição ficaria assim:
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

O que não é muito viável
*/

// Contando de 1 ate 10 com o laço de repetição:

// No usamos 3 parâmetros
for (let i = 0 /* Parâmetro 1: Declarando uma variável*/; i <= 10 /* Parâmetro 2: Declarando até quando será contado, no caso até "i" ser IGUAL ou MENOS que 10 */; i++ /* Parâmetro 3: Definindo o que acontece a cada Ciclo, no caso vai incrementar "+1(Number)" a variável "i" */) {
    console.log(i); // O que irá acontecer, no caso irá aparecer o valor de "i"
}

{
    // Exemplo Lista de estudantes

    let studant = ['Anderson', 'Rafaela', "Emanoel", `Tanael`, 'Talia', 'Jose', 'Dayane', 'Joao', 'Maria']

    for (let i = 0 /* Declarando uma variável */; i < studant.length /* Definindo quantas vezes irá se repetir, no caso, a mesma quantidade de inices que tem a lista "studant*/; i++ /* Vai incrementar mais 1 a "i"*/) {
    console.log(`${studant[i]} Esse aluno(a) estava na sala de aula`)  /* Vai mostrar um indice da Lista Studant que pode ser acessada usando "[](Colchetes)", onde o inice vai ser a variável "i" que inicialmente é "0", mas a cada ciclo incrementa "+1", fazendo com que o indice da lista avance */
    }

    console.log('Fim do codigo') // OBS: O codigo fica preso ao "FOR", ou seja ele não vai execultar outro codigo ou comando posterior ao "FOR" quando o mesmo estiver em execução.
}