let currentPokemonName = "";

async function pokemonOverlayCard(pokemonName) {
  currentPokemonName = pokemonName;
    cardInOverlayRef.innerHTML = "";
  const pokemon = pokemonNamesURLsArray.find(p => p.name === pokemonName);
  if (!pokemon) {
    return;
  }
  cardInOverlayRef.innerHTML = getPokemonOverlayCard(pokemon);
    overlay.classList.remove("hidden");
    document.body.classList.add("no-scroll");
  fillOverlayCard(pokemon);  
}

function closeOverlay() {
    overlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  }
  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    if (!overlay) {
        return;
    }
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeOverlay();
        }
    });
    function closeOverlay() {
        overlay.classList.add("hidden");
        document.body.classList.remove("no-scroll");
    }
});

function showPreviousCard(currentPokemonName) {
  const currentIndex = pokemonNamesURLsArray.findIndex(p => p.name === currentPokemonName);
  if (currentIndex > 0) {
      const previousPokemon = pokemonNamesURLsArray[currentIndex - 1];
      pokemonOverlayCard(previousPokemon.name);
  }
}

function showNextCard(currentPokemonName) {
  const currentIndex = pokemonNamesURLsArray.findIndex(p => p.name === currentPokemonName);
  if (currentIndex < pokemonNamesURLsArray.length - 1) { 
      const nextPokemon = pokemonNamesURLsArray[currentIndex + 1];
      pokemonOverlayCard(nextPokemon.name);
  }
}