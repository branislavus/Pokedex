function getPokemonCardTemplate(noteIndex) {
    return ` <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="pokemon picture${pokemonNamesURLsArray[noteIndex]["ID"]}">
          <div class="card-body">
            <p class="card-text">${pokemonNamesURLsArray[noteIndex]["name"]}</p>
          </div>
        </div>`;
}