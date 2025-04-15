async function fillOverlayCard(pokemon) {
    try {
        const response = await fetch(BASE_URL2 + pokemon.id + "/");
        const data = await response.json();
        fillTopCard(data);
        fillMainCard(data);
        fillStatsCard(data);
        fillEvolutionCard(data);
    } catch (error) {
        console.log("fillTopCard funktion fehler:", error);
    }
}

async function fillTopCard(data) {
    await fillTopCardIdName(data);
    await fillTopCardbadges(data);
    await fillTopCardSprites(data);
}

async function fillTopCardIdName(data) {
    const underImageSectionRef = document.getElementById("underImageSection");
    let id = data.id;
    let name = data.name;
    underImageSectionRef.innerHTML += `<h5 id="overlayCardIdName" class="card-title">#${id} ${name.charAt(0).toUpperCase() + name.slice(1)}</h5>`;
}

async function fillTopCardbadges(data) {
    const underImageSectionRef = document.getElementById("underImageSection");
    let types = data.types.map(type => type.type.name);
    types.forEach(type => {
        underImageSectionRef.innerHTML += `<div class="badgeOfType type-${type}">${type}</div>
        `;
    });
}

async function fillTopCardSprites(data) {
    const imageSectionRef = document.getElementById("imageSection");
    let sprites = data.sprites.other['official-artwork'].front_default;
    imageSectionRef.innerHTML += `<img src="${sprites}" class="card-img-top" alt="pokemon picture ${data.name}">`;
}


async function fillMainCard(data) {
    await fillMainCardHeightWeightBaseExperience(data);
}

async function fillMainCardHeightWeightBaseExperience(data) {
    let cardMainSectionRef = document.getElementById("cardMainSection");
    let height = data.height * 10 + " cm";
    let weight = data.weight / 10 + " kg";
    let baseExperience = data.base_experience + " xp";
    cardMainSectionRef.innerHTML += getcardMainSectionRefTemplate(height, weight, baseExperience)
    let cardMainSectionAbilitysRef = document.querySelector(".cardMainSectionAbilitys");
    let abilities = data.abilities.map(ability => ability.ability.name);
    abilities.forEach(ability => {
        cardMainSectionAbilitysRef.innerHTML += `
        <p type="button" class="btn btn-outline-secondary" disabled>${ability}</p>`;
    });
}



function fillStatsCard(data) {
    const cardBodyStatsRef = document.getElementById("card-text-main-stats-evo");
    let stats = data.stats.map(stat => stat.stat.name);
    let statsValues = data.stats.map(stat => stat.base_stat);
    stats.forEach((stat, index) => {
        cardBodyStatsRef.innerHTML += `<span id="${stat}" class="">${stat.charAt(0).toUpperCase() + stat.slice(1)} : ${statsValues[index]}</span>`;
    });
}

async function fillEvolutionCard(data) {
    try {
        const cardBodyEvoNamesRef = document.getElementById("evo-names");
        const cardBodyEvoPicturesRef = document.getElementById("evo-pictures");

        // Abrufen der Spezies-Daten
        const speciesData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`);
        const speciesJson = await speciesData.json();

        const evolutionChainData = await fetch(speciesJson.evolution_chain.url);
        const evolutionChainJson = await evolutionChainData.json();

        // Funktion zum Extrahieren der Evolution-Daten
        async function extractEvolutionData(chain) {
            if (!chain) return [];
            let pokemonInfo = [];

            // Name und Bild des aktuellen Pokémon abrufen
            const name = chain.species.name;
            const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const pokemonJson = await pokemonData.json();
            pokemonInfo.push({ name, img: pokemonJson.sprites.front_default });

            // Falls es weitere Entwicklungen gibt, iteriere durch alle Möglichkeiten
            for (const evolution of chain.evolves_to) {
                const nextEvolutions = await extractEvolutionData(evolution);
                pokemonInfo = pokemonInfo.concat(nextEvolutions);
            }

            return pokemonInfo;
        }

        // Evolution-Kette extrahieren
        const pokemonInfo = await extractEvolutionData(evolutionChainJson.chain);

        // Evolution-Daten in die HTML-Elemente einfügen
        cardBodyEvoNamesRef.innerHTML = "";
        cardBodyEvoPicturesRef.innerHTML = "";

        pokemonInfo.forEach(pokemon => {
            cardBodyEvoNamesRef.innerHTML += `<span class="evo-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>`;
            cardBodyEvoPicturesRef.innerHTML += `<img src="${pokemon.img}" alt="${pokemon.name}" class="evo-picture">`;
        });

    } catch (error) {
        console.error("Fehler beim Abrufen der Evolution-Kette:", error);
    }
}