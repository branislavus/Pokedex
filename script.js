const BASE_URL = "https://pokeapi.co/api/v2/";
let START_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let previousPokemonURL = "";
let nextPokemonURL = "";
let pokemonTotalAmount = 1025;
let POKEMON_URL = [];
let pokemonNamesURLsArray = [];
let pokemonALLNamesURLsArray = [];
let pokemonALLNamesURLsArray1302 = [];
let pokemonALLNamesURLsArray1302fromLSBD = [];
let errorURLS_from_1302 = [];
let pokemonAllInformationsArray = [];
let currentPokemonArray = [];
const amountOfLoad = 20;
let startLoadIndex = pokemonNamesURLsArray.length;

const pokemonRenderSectionRef = document.getElementById("pokemonRenderSection");


async function onload() {

  await makePokemonArray();
  renderPokemonCards();
  await get1302pokemonData();
  
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

async function get1302pokemonData() {
  pokemonALLNamesURLsArray1302 = [];
  let urls = generatePokemonURLs();
  let promises = urls.map(async (url) => {
      try {
          let response = await fetch(url);
          let data = await response.json();
          pokemonALLNamesURLsArray1302.push({
              id: data.id,
              name: data.name,
              url: url,
          });
      } catch (error) {
          errorURLS_from_1302.push(url);
      }
    });
  await Promise.all(promises);
  pokemonALLNamesURLsArray1302.sort((a, b) => a.id - b.id);
  console.log(pokemonALLNamesURLsArray1302);
  
}

function generatePokemonURLs(pokemonTotalAmount) {
  let urls = [];
  for (let index = 1; index <= pokemonTotalAmount; index++) {
      urls.push(`https://pokeapi.co/api/v2/pokemon/${index}/`);
  }
  return urls;
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
  for (let i = 0; i < pokemonNamesURLsArray.length; i++) {
    pokemonRenderSectionRef.innerHTML += `
      <div class="pokemon-card" id="${pokemonNamesURLsArray[i].name}" onclick="pokemonOverlayCard('${pokemonNamesURLsArray[i].name}')">
        <h3>#${pokemonNamesURLsArray[i].id} ${pokemonNamesURLsArray[i].name}</h3>
        <a href="${pokemonNamesURLsArray[i].url}" target="_blank">Details</a>
        <div class="card" style="width: 18rem;">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNamesURLsArray[i].id}.png" class="card-img-top" alt="pokemon picture ${pokemonNamesURLsArray[i].name}">
          <div class="card-body">
            <p class="card-text">${pokemonNamesURLsArray[i].name}</p>
          </div>
        </div>
      </div>
    `;
  }
}