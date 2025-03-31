
function pokemonOverlayCard(pokemon) {
 console.log("Pokemon clicked:", pokemon);
 
    getAllPokemonData(pokemon);

}

async function getAllPokemonData(pokemon) {
    currentPokemonArray = [];
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    console.log("API-Response:", data);
    currentPokemonArray.push({
        id: data.id,
        name: data.name,
        url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
        type: data.types.map(typeInfo => typeInfo.type.name),
        weight: data.weight,
        height: data.height,
        base_experience: data.base_experience,
        hp: data.stats[0]?.base_stat || 0,
        attack: data.stats[1]?.base_stat || 0,
        defense: data.stats[2]?.base_stat || 0,
        special_attack: data.stats[3]?.base_stat || 0,
        special_defense: data.stats[4]?.base_stat || 0,
        speed: data.stats[5]?.base_stat || 0,
        abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name),
        moves: data.moves.map(moveInfo => moveInfo.move.name),
        sprites: data.sprites.other["official-artwork"].front_default || "",
        species: data.species.name
    });
    return currentPokemonArray;
}
