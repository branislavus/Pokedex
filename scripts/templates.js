function getPokemonCardTemplate(noteIndex) {
    return ` <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="pokemon picture${pokemonNamesURLsArray[noteIndex]["ID"]}">
          <div class="card-body">
            <p class="card-text">${pokemonNamesURLsArray[noteIndex]["name"]}</p>
          </div>
        </div>`;
}

function getPokemonOverlayCard(pokemon){
 return `<h2>#${pokemon.id} ${pokemon.name}</h2>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}" style="width: 100%; border-radius: 10px;">
    <p>Details: <a href="${pokemon.url}" target="_blank">Mehr erfahren</a></p>
    <button onclick="closeOverlay()">Schließen</button>
  `;
}