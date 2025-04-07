
async function get1302pokemonData() {
    pokemonALLNamesURLsArray1302 = [];
    let urls = generatePokemonURLs();
    let promises = urls.map(async (url) => {
        try {
            let response = await fetch(url);
            let data = await response.json();
            pokemonALLNamesURLsArray1302.push({
                id: data.id,
                name: data.name,
                url: url,
            });
        } catch (error) {
            errorURLS_from_1302.push(url);
        }
      });
    await Promise.all(promises);
    pokemonALLNamesURLsArray1302.sort((a, b) => a.id - b.id);
    console.log(pokemonALLNamesURLsArray1302);  
  }