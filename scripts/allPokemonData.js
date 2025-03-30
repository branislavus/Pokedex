


async function loadAllPokemonData() {
    let allPokemonData = await fetch(BASE_URL);
    let allPokemonArray = Object.keys(allPokemonData + ".json");
    for (let index = 0; index < BASE_URL.length; index++) {
        try {
            console.log(allPokemonArray);
            pokemonAllInformationsArray.push(
                {
                    name: allPokemonArray.name,
                    id: allPokemonArray.id,
                    type: allPokemonArray.types[0].type.name,
                    weight: allPokemonArray.weight,
                    height: allPokemonArray.height
                });
        } catch (error) {
            console.error(`Fehler beim Laden von ${pokemonNamesURLsArray[index].url}:`, error);
        }


    }
    console.log(pokemonAllInformationsArray);
}

