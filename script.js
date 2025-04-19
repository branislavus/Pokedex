const BASE_URL2 = "https://pokeapi.co/api/v2/pokemon/";
const BASE_URL = "https://pokeapi.co/api/v2/";
let START_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let POKEMON_URL = [];
let previousPokemonURL = "";
let nextPokemonURL = "";
let pokemonTotalAmount = 1025;
const amountOfLoad = 20;
let pokemonNamesURLsArray = [];
let pokemonALLNamesURLsArray = [];
let pokemonALLNamesURLsArray1302 = []; // Array for all 1302 Pokémon
let pokemonAllInformationsArray = [];
let currentPokemonArray = [];
let startLoadIndex = pokemonNamesURLsArray.length;

const pokemonRenderSectionRef = document.getElementById("pokemonRenderSection");
const overlay = document.getElementById("overlay");
const cardInOverlayRef = document.getElementById("cardInOverlay");
const topCardToFillRef = document.getElementById("topCardToFill");

async function onload() {
  showLoadingSpinner();
  await makePokemonArray();
  renderPokemonCards();
  hideLoadingSpinner();
  // await get1302pokemonData(); load all 1302 pokemons in pokemonALLNamesURLsArray1302 array
}

async function makePokemonArray() {
  let pokemonData = await loadPokemonData();
  pokemonNamesURLsArray = [];
  previousPokemonURL = pokemonData.previous;
  nextPokemonURL = pokemonData.next;
  for (let pokemon of pokemonData.results) {
    pokemonNamesURLsArray.push({
      id: pokemon.url.split("/").slice(-2)[0],
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

function generatePokemonURLs() {
  let urls = [];
  for (let index = 1; index <= pokemonTotalAmount; index++) {
      urls.push(`https://pokeapi.co/api/v2/pokemon/${index}/`);
  }
  return urls;
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
  pokemonRenderSectionRef.innerHTML = "";
  for (let i = 0; i < pokemonNamesURLsArray.length; i++) {
      const globalIndex = startLoadIndex + i;
      renderPokemonCardTemplate(pokemonNamesURLsArray[i], globalIndex);
      addPokemonTypes(globalIndex, pokemonNamesURLsArray[i].name);
  }
  startLoadIndex += pokemonNamesURLsArray.length;
}

function addPokemonTypes(globalIndex, name) {
  getPokemonTypes(globalIndex, name);
}