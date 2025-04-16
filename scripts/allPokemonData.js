
  async function get1302pokemonData() {
       let storedData = loadPokemonDataFromLocalStorage();
    if (storedData) {
        console.log("Daten aus Local Storage geladen:", storedData);
        return storedData;
    }
    let urls = generatePokemonURLs();
    let pokemonData = await fetchAllPokemonData(urls);
    pokemonData.sort((a, b) => a.id - b.id);
    savePokemonDataToLocalStorage(pokemonData);
    console.log("Daten aus API geladen und im Local Storage gespeichert:", pokemonData);
    return pokemonData;
}

async function fetchAllPokemonData(urls) {
    let pokemonData = [];
    let errorURLs = [];
    let promises = urls.map(async (url) => {
        try {
            let response = await fetch(url);
            let data = await response.json();
            pokemonData.push({
                id: data.id,
                name: data.name,
                url: url,
            });
        } catch (error) {
            console.error(`Fehler beim Abrufen der URL ${url}:`, error);
            errorURLs.push(url);
        }
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