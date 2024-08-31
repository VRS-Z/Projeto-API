const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsDiv = document.getElementById("results");
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;

  // Dados mockados de exemplo (substitua por seus próprios dados)
  const mockData = [
    {
      title: "Bolo de Chocolate",
      ingredients: ["chocolate", "ovos", "farinha"],
      instructions: "Misture os ingredientes e asse por 30 minutos.",
    },
    {
      title: "Macarrão à Bolonhesa",
      ingredients: ["macarrão", "carne moída", "tomate"],
      instructions: "Cozinhe o macarrão e misture com o molho bolonhesa.",
    },
  ];

  // Filtrar os dados com base no termo de pesquisa (case-insensitive)
  const filteredData = mockData.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Exibindo os resultados na página
  resultsDiv.innerHTML = "";
  filteredData.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.innerHTML = `
              <h2>${recipe.title}</h2>
              <p>Ingredientes: ${recipe.ingredients.join(", ")}</p>
              <p>Instruções: ${recipe.instructions}</p>
          `;
    resultsDiv.appendChild(recipeDiv);
  });
});
