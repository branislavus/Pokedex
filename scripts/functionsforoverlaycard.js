async function getPokemonTypes(id,name) {
 let PokemonTypes = [];
 let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
 let data = await response.json(); 
 console.log("moje data:",data);
 
    let types = data.types.map(type => type.type.name);
    PokemonTypes.push(...types);
    let typesString = PokemonTypes.join(" ");
 
   
    document.getElementById(`pokemon-card-type${id}`).innerHTML += `<h6 class="card-title">${typesString}</h6>`;
    PokemonTypes.forEach(element => {
        document.getElementById(`${name}`).classList.add("type-"+ element);
    ;  });
 
}

getPokemonTypes();