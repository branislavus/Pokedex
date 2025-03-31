
function pokemonOverlayCard(pokemon) {
 console.log("PokemonCard"+pokemon);
}

async function getAllPokemonData() {
    pokemonAllInformationsArray = [];
    let promises = pokemonNamesURLsArray.map(async (pokemon) => {
        try {
            let response = await fetch(pokemon.url); // Hole die Daten für jedes Pokémon
            let data = await response.json();

            // Füge die Pokémon-Daten in das Array ein
            pokemonAllInformationsArray.push({
                id: data.id,
                name: data.name,
                url: pokemon.url,
                type: data.types.map(typeInfo => typeInfo.type.name), // Extrahiere die Typen
                weight: data.weight,
                height: data.height,
                base_experience: data.base_experience,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                special_attack: data.stats[3].base_stat,
                special_defense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,
                abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name), // Extrahiere die Fähigkeiten
                moves: data.moves.map(moveInfo => moveInfo.move.name), // Extrahiere die Moves
                sprites: data.sprites.other["official-artwork"].front_default, // Offizielles Artwork
                species: data.species.name
            });
        } catch (error) {
            console.error(`Fehler beim Laden von ${pokemon.url}:`, error);
        }
    });

    // Warte, bis alle API-Aufrufe abgeschlossen sind
    await Promise.all(promises);

    console.log("Alle Pokémon-Daten wurden geladen:", pokemonAllInformationsArray);
}
