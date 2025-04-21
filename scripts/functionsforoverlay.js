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
    imageSectionRef.innerHTML += `<img src="${sprites}" class="card-img-top card-img-top-overlay" alt="pokemon picture ${data.name}">`;
}


async function fillMainCard(data) {
    await fillMainCardHeightWeightBaseExperience(data);
}

async function fillMainCardHeightWeightBaseExperience(data) {
    const height = (data.height / 10).toFixed(1) + " m";
    const weight = (data.weight / 10).toFixed(1) + " kg";
    const baseExperience = data.base_experience + " XP";
    const normalizedHeight = Math.min((data.height / 20) * 100, 100);
    const normalizedWeight = Math.min((data.weight / 200) * 100, 100);
    const normalizedBaseExperience = Math.min((data.base_experience / 500) * 100, 100);
    const cardMainSectionHTML = getCardMainSectionTemplate(
        height,
        weight,
        baseExperience,
        normalizedHeight,
        normalizedWeight,
        normalizedBaseExperience
    );
    const cardMainSectionRef = document.getElementById("cardMainSection");
    cardMainSectionRef.innerHTML = cardMainSectionHTML;
    fillMainCardAbilities(data);
}

function fillMainCardAbilities(data) {
    const cardMainSectionAbilitysRef = document.getElementById("cardMainSectionAbilitys");
    cardMainSectionAbilitysRef.innerHTML = "";
    const abilities = data.abilities.map(ability => ability.ability.name);
    cardMainSectionAbilitysRef.innerHTML = `
        <ul>
            ${abilities.map(ability => `<li>${ability}</li>`).join("")}
        </ul>
    `;
}

function fillStatsCard(data) {
    const cardBodyStatsRef = document.getElementById("card-text-main-stats-evo");
    cardBodyStatsRef.innerHTML = "";

     data.stats.forEach(stat => {
        const statName = stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1); // Name formatieren
        const baseStat = stat.base_stat; // Basiswert
        const normalizedStat = Math.min((baseStat / 200) * 100, 100); // Normalisierung (z. B. Maximalwert 200)
  
        cardBodyStatsRef.innerHTML += `
        <div class="stat-row">
                <span class="stat-name">${statName}</span>
                <span class="stat-value">${baseStat}</span>
                <div class="progress">
                    <div class="progress-bar " role="progressbar" style="width: ${normalizedStat}%" aria-valuenow="${normalizedStat}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        `;
    });
}


async function fillEvolutionCard(data) {
    try {
        const cardBodyEvoNamesRef = document.getElementById("evo-names");
        const cardBodyEvoPicturesRef = document.getElementById("evo-pictures");
        const speciesJson = await fetchSpeciesData(data.id);
        const evolutionChainJson = await fetchEvolutionChain(speciesJson.evolution_chain.url);
        const pokemonInfo = await extractEvolutionData(evolutionChainJson.chain);
        renderEvolutionData(pokemonInfo, cardBodyEvoNamesRef, cardBodyEvoPicturesRef);
    } catch (error) {
        console.error("Fehler beim Abrufen der Evolution-Kette:", error);
    }
}

async function fetchSpeciesData(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
    return await response.json();
}

async function fetchEvolutionChain(evolutionChainUrl) {
    const response = await fetch(evolutionChainUrl);
    return await response.json();
}


async function extractEvolutionData(chain) {
    if (!chain) return [];
    let pokemonInfo = [];
    const name = chain.species.name;
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemonJson = await pokemonData.json();
    pokemonInfo.push({ name, img: pokemonJson.sprites.front_default });
    for (const evolution of chain.evolves_to) {
        const nextEvolutions = await extractEvolutionData(evolution);
        pokemonInfo = pokemonInfo.concat(nextEvolutions);
    }
    return pokemonInfo;
}

function renderEvolutionData(pokemonInfo, namesRef, picturesRef) {
    namesRef.innerHTML = "";
    picturesRef.innerHTML = "";
    pokemonInfo.forEach(pokemon => {
        namesRef.innerHTML += `<span class="evo-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>`;
        picturesRef.innerHTML += `<img src="${pokemon.img}" alt="${pokemon.name}" class="evo-picture" onclick="playNoise('${pokemon.img}')">`;
    });
}