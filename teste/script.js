document.body.innerHTML = "Teste 123";

function dados() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erro na resposta da API");
      }
      return res.json(); // Converte a resposta para JSON
    })
    .then((data) => {
      console.log(data); // Exibe os dados no console
      document.body.innerHTML += `<p>${data.value}</p>`; // Exibe a piada na página
      document.body.innerHTML += `<p>${data.created_at}</p>`; // Exibe a piada na página
      document.body.innerHTML += `<p>${data.icon_url}</p>`; // Exibe a piada na página
      document.body.innerHTML += `<p>${data.id}</p>`; // Exibe a piada na página
    })
    .catch((err) => {
      console.log("Error:", err);
      document.body.innerHTML += `<p>Erro ao buscar dados: ${err.message}</p>`; // Exibe o erro na página
    });
}

dados();
