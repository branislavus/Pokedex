let currentPokemonName = "";

async function pokemonOverlayCard(pokemonName) {
  currentPokemonName = pokemonName;
    cardInOverlayRef.innerHTML = "";
  const pokemon = pokemonNamesURLsArray.find(p => p.name === pokemonName);
  if (!pokemon) {
    console.error(`Pokémon mit dem Namen "${pokemonName}" wurde nicht gefunden.`);
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
  if (currentIndex > 0) { // Überprüfen, ob ein vorheriges Pokémon existiert
      const previousPokemon = pokemonNamesURLsArray[currentIndex - 1];
      pokemonOverlayCard(previousPokemon.name); // Overlay mit dem vorherigen Pokémon öffnen
  } else {
      console.log("Dies ist die erste Karte."); // Optional: Nachricht, wenn keine vorherige Karte existiert
  }
}

function showNextCard(currentPokemonName) {
  const currentIndex = pokemonNamesURLsArray.findIndex(p => p.name === currentPokemonName);
  if (currentIndex < pokemonNamesURLsArray.length - 1) { // Überprüfen, ob ein nächstes Pokémon existiert
      const nextPokemon = pokemonNamesURLsArray[currentIndex + 1];
      pokemonOverlayCard(nextPokemon.name); // Overlay mit dem nächsten Pokémon öffnen
  } else {
      console.log("Dies ist die letzte Karte."); // Optional: Nachricht, wenn keine nächste Karte existiert
  }
}