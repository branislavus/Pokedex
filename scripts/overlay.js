
async function pokemonOverlayCard(pokemonName) {
    cardInOverlayRef.innerHTML = "";
  // Finde das Pokémon in pokemonNamesURLsArray
  const pokemon = pokemonNamesURLsArray.find(p => p.name === pokemonName);

  if (!pokemon) {
    console.error(`Pokémon mit dem Namen "${pokemonName}" wurde nicht gefunden.`);
    return;
  }

  // Füge den Inhalt zur Overlay-Karte hinzu
  cardInOverlayRef.innerHTML = getPokemonOverlayCard(pokemon);

  // Zeige das Overlay an
  overlay.classList.remove("hidden");
}

// Funktion, um das Overlay zu schließen
function closeOverlay() {
    overlay.classList.add("hidden");
  }
  
  // Schließe das Overlay, wenn außerhalb der Karte geklickt wird
  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");

    if (!overlay) {
        console.error("Das Overlay-Element wurde nicht gefunden.");
        return;
    }

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeOverlay();
        }
    });

    function closeOverlay() {
        overlay.classList.add("hidden");
    }
});