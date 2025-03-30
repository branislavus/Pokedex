const BASE_URL = "https://pokeapi.co/api/v2/";
let START_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let previousPokemonURL = "";
let nextPokemonURL = "";
let pokemonTotalAmount = 0;
let POKEMON_URL = [];
let pokemonNamesURLsArray = [];
let pokemonAllInformationsArray = [];
const amountOfLoad = 20;
let startLoadIndex = pokemonNamesURLsArray.length;

const pokemonRenderSectionRef = document.getElementById("pokemonRenderSection");


async function onload() {
  await makePokemonArray();
  console.log(pokemonTotalAmount);
  
  console.log(nextPokemonURL);
  console.log(previousPokemonURL);
  console.log(pokemonNamesURLsArray);
  renderPokemonCards()
}

async function makePokemonArray() {
  let pokemonData = await loadPokemonData();
  pokemonTotalAmount = pokemonData.count;
  previousPokemonURL = pokemonData.previous;
  nextPokemonURL = pokemonData.next;

  for (let pokemon of pokemonData.results) {
    pokemonNamesURLsArray.push({
      name: pokemon.name,
      url: pokemon.url,
    });
  }
}

async function loadPokemonData() {
  let response = await fetch(makeOffsetString());
  let responseToJson = await response.json();
  return responseToJson;
}

function makeOffsetString() {
  return START_URL;
}

async function loadPreviousPokemons() {
  if (previousPokemonURL == "") {
    return;
  } else {
    START_URL = previousPokemonURL;
  }
 await makePokemonArray();
 renderPokemonCards();
}

async function loadNextPokemons() {
  if (nextPokemonURL == "") {
    return;
  } else {
    START_URL = nextPokemonURL;
  }
  await makePokemonArray();
  renderPokemonCards();
}

function renderPokemonCards() {
  pokemonRenderSectionRef.innerHTML = ""; // Clear existing content
  for (let pokemon of pokemonNamesURLsArray) {
    pokemonRenderSectionRef.innerHTML += `
      <div class="pokemon-card">
        <h3>${pokemon.name}</h3>
        <a href="${pokemon.url}" target="_blank">Details</a>
      </div>
    `;
  }
}