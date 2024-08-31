const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsDiv = document.getElementById("results");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  console.log("Você pesquisou por:", searchTerm);

  // Aqui você faria a requisição para a API e atualizaria o conteúdo do resultsDiv
  // Por enquanto, vamos apenas exibir uma mensagem no console
});
