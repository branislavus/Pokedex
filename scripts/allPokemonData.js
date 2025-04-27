async function get1302pokemonData() {
    let storedData = loadPokemonDataFromLocalStorage();
    if (storedData) {
        return storedData;
    }
    let urls = generatePokemonURLs();
    let pokemonData = await fetchAllPokemonData(urls);
    pokemonData.sort((a, b) => a.id - b.id);
    savePokemonDataToLocalStorage(pokemonData);
    return pokemonData;
}

async function fetchAllPokemonData(urls) {
    let pokemonData = [];
    let errorURLs = [];
    let promises = urls.map(async (url) => {
        let response = await fetch(url);
        let data = await response.json();
        pokemonData.push({
            id: data.id,
            name: data.name,
            url: url,
        });
    });
    await Promise.all(promises);
    return pokemonData;
}

function generatePokemonURLs() {
    let urls = [];
    for (let i = 1; i <= 1302; i++) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    return urls;
}