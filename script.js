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

function makeOffsetString() {
  return START_URL;
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
// to be continiuded
async function getPokemonTypes(pokemon) {
  let currentPokemonTypes = [];
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  let data = await response.json();
  currentPokemonTypes.push({
      type: data.types.map(typeInfo => typeInfo.type.name),
      });
      currentPokemonTypes.forEach(element => {
        return `<p>${element.type}</p>`;
      });
}