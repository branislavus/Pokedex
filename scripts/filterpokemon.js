function filterPokemon() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const storedData = localStorage.getItem("pokemonData");
    if (!storedData) {
        console.error("Keine Pokémon-Daten im Local Storage gefunden.");
        return;
    }

    const allPokemon = JSON.parse(storedData);

    if (searchInput.length >= 3) {
        const filteredPokemon = allPokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchInput)
        );

        renderFilteredPokemon(filteredPokemon);
    } else {
        return;
    }
}

function renderFilteredPokemon(pokemonList) {
    const pokemonRenderSectionRef = document.getElementById("pokemonRenderSection");
    pokemonRenderSectionRef.innerHTML = "";

    pokemonList.forEach((pokemon, index) => {
        renderPokemonCardTemplate(pokemon, index);
    });
}