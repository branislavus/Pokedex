function loadPokemonDataFromLocalStorage() {
    let storedData = localStorage.getItem("pokemonData");
    if (storedData) {
        return JSON.parse(storedData);
    }
    return null;
}

function savePokemonDataToLocalStorage(data) {
    localStorage.setItem("pokemonData", JSON.stringify(data));
}