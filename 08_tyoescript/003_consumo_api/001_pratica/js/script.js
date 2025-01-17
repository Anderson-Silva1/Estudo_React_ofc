// * Aprendendo sobre o fetch API na Prática

// ? O Fetch API é uma função que retorna uma Prommises com um resultado... Podemos usar o Fetch API usando o then/catch ou async/await

// * Usando then/catch
fetch("https://viacep.com.br/ws/01001000/json/", {
  headers: {},
})
  .then((response) => {
    response.json().then((dados) => console.log(dados));
  })
  .catch((err) => {
    console.log(err);
  });

// ! response.json() também vai retornar uma Promisse

// * Usando async/await
async function acessandoDadosCep() {
  try {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const dados = await resposta.json();
    console.log(dados);
  } catch (error) {
    console.log("Deu error:", error);
  } finally {
    console.log("Requisição Feita!!");
  }
}

acessandoDadosCep();
