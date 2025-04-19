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
    const bodyButtonOnTheBottomRef = document.getElementById("bodyButtonOnTheBottom");
    const cancelFilteredPokemonsRef = document.getElementById("cancelFilteredPokemons");
    pokemonRenderSectionRef.innerHTML = "";
    const storedData = localStorage.getItem("pokemonData");
    if (!storedData) {
        console.error("Keine Pokémon-Daten im Local Storage gefunden.");
        return;
    }
    const allPokemon = JSON.parse(storedData);

    pokemonList.forEach(pokemon => {
        const globalIndex = allPokemon.findIndex(p => p.name === pokemon.name);
        renderPokemonCardTemplate(pokemon, globalIndex);
        getPokemonTypes(globalIndex,pokemon.name);
        bodyButtonOnTheBottomRef.classList.add("hidden");
        cancelFilteredPokemonsRef.classList.remove("hidden");
        cancelFilteredPokemonsRef.classList.add("btn");
    });
}

function cancelFilteredPokemons(){
    location.reload();
}