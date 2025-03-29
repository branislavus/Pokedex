const BASE_URL = "https://pokeapi.co/api/v2/";
let pokemonDBArray = [];
const amountOfLoad = 3;
let startLoadIndex = pokemonDBArray.length ;


function onload() {
  makePokemonArray();
}


async function loadPokemonData() {
  let response = await fetch(BASE_URL + makeOffsetString());
  let responseToJson = await response.json();
  console.log(responseToJson);
  return responseToJson.results;
}

function makeOffsetString() {
  return `pokemon?limit=${amountOfLoad}&offset=${startLoadIndex}`;
}

async function makePokemonArray() {
  let pokemonData = await loadPokemonData();
  let pokemonArray = Object.entries(pokemonData);
  for (let index = 0; index < pokemonArray.length; index++) {
    pokemonDBArray.push(
      {
        name: pokemonArray[index][1].name,
        url: pokemonArray[index][1].url
      }
    )
  }
  console.log(pokemonArray);
  console.log(pokemonDBArray);

}

async function loadMorePokemons() {
  startLoadIndex += amountOfLoad;
  console.log(startLoadIndex);
 makePokemonArray();
}

