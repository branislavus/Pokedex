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



function fillStatsCard() {
}

function fillEvolutionCard() {

}
