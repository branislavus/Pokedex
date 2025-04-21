
async function pokemonOverlayCard(pokemonName) {
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