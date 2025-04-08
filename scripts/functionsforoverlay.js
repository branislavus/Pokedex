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



async function fillTopCard (data) {
    let types = data.types.map(type => type.type.name);
    types.forEach(type => {
        underImageSectionRef.innerHTML += `<div class="badgeOfType type-${type}">${type}</div>
        `;    
    });
    
}

const showDataToFillTopCard = (data) => {
    const { id, name, sprites, types } = data;
    const { type } = types;
    underImageSectionRef.innerHTML = types.map((item) => {
        const { type } = item;
        return `
            <div class="badgeOfType type-${type.name}">${type.name}</div>
        `;
    }).join("");
    topCardToFillRef.innerHTML = `
        <div class="card">
            <div class="card-body">
                 <img src="${sprites.other['official-artwork'].front_default}" class="card-img-top" alt="pokemon picture ${name}">
                 <h5 class="card-title">#${id} ${name}</h5>
            </div>
        </div>
        `;
}





function fillMainCard() {

}

function fillStatsCard() {

}

function fillEvolutionCard() {

}
