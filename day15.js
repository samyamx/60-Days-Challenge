const pokemonInput = document.getElementById("pokemonInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
    const pokemon = pokemonInput.value;

    if (pokemon === "") {
        result.textContent = "Please enter a Pokemon name.";
    } else {
        result.textContent = `You searched for ${pokemon}!`;
    }
});
