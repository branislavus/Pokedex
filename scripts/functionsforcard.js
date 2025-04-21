async function getPokemonTypes(id, name) {
    let PokemonTypes = [];
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}/`);
    let data = await response.json();
    let types = data.types.map(type => type.type.name);
    types.forEach(type => {
        document.getElementById(`pokemon-card-type${id}`).innerHTML += `<div class="badgeOfType type-${type}">${type}</div>
        `;
    });
    PokemonTypes.push(...types);
    let cardElement = document.getElementById(name);
    setPokemonCardBackground(cardElement, types);
    PokemonTypes.forEach(element => {
        cardElement.classList.add("type-" + element);
    });
}

function setPokemonCardBackground(cardElement, types) {
    if (!cardElement) {
        return;
    }
    if (types.length === 2) {
        cardElement.style.backgroundImage = `linear-gradient(to bottom right, var(--type-${types[0]}), var(--type-${types[1]}))`;
    } else if (types.length === 1) {
        cardElement.style.backgroundColor = `var(--type-${types[0]})`;
    }
}