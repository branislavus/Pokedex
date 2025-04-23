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
  updateOverlayButtons(pokemonName);
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
    updateOverlayButtons(previousPokemon.name);
  }
}

function showNextCard(currentPokemonName) {
  const currentIndex = pokemonNamesURLsArray.findIndex(p => p.name === currentPokemonName);
  if (currentIndex < pokemonNamesURLsArray.length - 1) {
    const nextPokemon = pokemonNamesURLsArray[currentIndex + 1];
    pokemonOverlayCard(nextPokemon.name);
    updateOverlayButtons(nextPokemon.name);
  }
}

function updateOverlayButtons(currentPokemonName) {
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");
  const currentIndex = pokemonNamesURLsArray.findIndex(p => p.name === currentPokemonName);
  if (currentIndex === 0) {
    previousButton.classList.add("disabled");
    previousButton.setAttribute("aria-disabled", "true");
  } else {
    previousButton.classList.remove("disabled");
    previousButton.removeAttribute("aria-disabled");
  }
  if (currentIndex === pokemonNamesURLsArray.length - 1) {
    nextButton.classList.add("disabled");
    nextButton.setAttribute("aria-disabled", "true");
  } else {
    nextButton.classList.remove("disabled");
    nextButton.removeAttribute("aria-disabled");
  }
}