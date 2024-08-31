const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsDiv = document.getElementById("results");
const apiKey = "36ba108985114fc5b7be53eaf9d92b9a"; // Substitua pela sua API key

searchButton.addEventListener("click", async () => {
  const searchTerm = searchInput.value;
  const url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchTerm}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Filtrar os dados com base no termo de pesquisa (case-insensitive)
    const filteredData = data.results.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Exibir os resultados na página
    resultsDiv.innerHTML = "";
    filteredData.forEach((recipe) => {
      console.log("Recipe completa:", recipe);
      console.log("URL da imagem original:", recipe.image);
      const recipeDiv = document.createElement("div");
      console.log("Elemento recipeDiv:", recipeDiv);
      recipeDiv.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <p>Ingredientes: ${
          (recipe.ingredients &&
            recipe.ingredients
              .map((ingredient) => ingredient.original)
              .join(", ")) ||
          "Ingredientes não disponíveis"
        }</p>
        <a href="${recipe.sourceUrl}" target="_blank">Ver receita completa</a>
      `;
      resultsDiv.appendChild(recipeDiv);
    });
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    resultsDiv.innerHTML =
      "<p>Ocorreu um erro ao buscar receitas. Tente novamente mais tarde.</p>";
  }
});
