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
let pokemonALLNamesURLsArray1302 = [];
let pokemonAllInformationsArray = [];
let currentPokemonArray = [];
let startLoadIndex = pokemonNamesURLsArray.length;
const pokemonRenderSectionRef = document.getElementById("pokemonRenderSection");
const overlay = document.getElementById("overlay");
const cardInOverlayRef = document.getElementById("cardInOverlay");
const topCardToFillRef = document.getElementById("topCardToFill");

async function onload() {
  showLoadingSpinner();
  await loadAllPokemonDataInBackground();
  await afterOnload();
  hideLoadingSpinner();
}

async function afterOnload() {
  showLoadingSpinner();
  await makePokemonArray();
  renderPokemonCards();
  hideLoadingSpinner();
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
  disableButtons();
  showLoadingSpinner();
  if (!previousPokemonURL) {
    START_URL = `https://pokeapi.co/api/v2/pokemon?offset=${pokemonTotalAmount - amountOfLoad}&limit=${amountOfLoad}`;
  } else {
    START_URL = previousPokemonURL;
  }
  await makePokemonArray();
  renderPokemonCards();
  hideLoadingSpinner();
  enableButtons();
}

async function loadNextPokemons() {
  disableButtons();
  showLoadingSpinner();
  if (!nextPokemonURL || START_URL.includes(`offset=${pokemonTotalAmount}`)) {
    START_URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${amountOfLoad}`;
  } else {
    const nextOffset = parseInt(nextPokemonURL.split("offset=")[1].split("&")[0]);
    if (nextOffset >= pokemonTotalAmount) {
      START_URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${amountOfLoad}`;
    } else {
      START_URL = nextPokemonURL;
    }
  }
  await makePokemonArray();
  renderPokemonCards();
  hideLoadingSpinner();
  enableButtons();
}

function disableButtons() {
  document.getElementById("loadPreviousButton").disabled = true;
  document.getElementById("loadNextButton").disabled = true;
}

function enableButtons() {
  document.getElementById("loadPreviousButton").disabled = false;
  document.getElementById("loadNextButton").disabled = false;
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