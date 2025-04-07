async function getPokemonTypes(id,name) {
 let PokemonTypes = [];
 let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}/`);
 let data = await response.json(); 
 console.log("moje data:",data);
 
    let types = data.types.map(type => type.type.name);
    types.forEach(type => {
        document.getElementById(`pokemon-card-type${id}`).innerHTML += `<div class="badgeOfType type-${ type}">${type}</div>
        `;    
    });

    PokemonTypes.push(...types);
    let typesString = PokemonTypes.join(" ");
 
   
    

    let cardElement = document.getElementById(name);
    if (!cardElement) {
        console.error(`HTML-Element mit ID "${name}" wurde nicht gefunden.`);
        return;
    }

    // Wenn es zwei Typen gibt, setze einen linear-gradient-Hintergrund
    if (PokemonTypes.length === 2) {
        cardElement.style.backgroundImage = `linear-gradient(to bottom right, var(--type-${PokemonTypes[0]}), var(--type-${PokemonTypes[1]}))`;
    } else if (PokemonTypes.length === 1) {
        // Wenn es nur einen Typ gibt, setze eine einfarbige Hintergrundfarbe
        cardElement.style.backgroundColor = `var(--type-${PokemonTypes[0]})`;
    }

    PokemonTypes.forEach(element => {
        cardElement.classList.add("type-" + element);
      });
 
}
