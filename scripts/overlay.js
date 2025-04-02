// Referenzen zum Overlay und zur Overlay-Karte
const overlay = document.getElementById("overlay");
const overlayPokemonCard = document.getElementById("overlayPokemonCard");

// Funktion, um die Overlay-Karte anzuzeigen
function pokemonOverlayCard(pokemonName) {
  // Finde das Pokémon in pokemonNamesURLsArray
  const pokemon = pokemonNamesURLsArray.find(p => p.name === pokemonName);

  if (!pokemon) {
    console.error(`Pokémon mit dem Namen "${pokemonName}" wurde nicht gefunden.`);
    return;
  }

  // Füge den Inhalt zur Overlay-Karte hinzu
  overlayPokemonCard.innerHTML = `<h2>#${pokemon.id} ${pokemon.name}</h2>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}" style="width: 100%; border-radius: 10px;">
    <p>Details: <a href="${pokemon.url}" target="_blank">Mehr erfahren</a></p>
    <button onclick="closeOverlay()">Schließen</button>
  `;

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