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
;
}

async function fillMainCardHeightWeightBaseExperience(data) {
    let cardMainSectionRef = document.getElementById("cardMainSection");
    let height = data.height * 10 + " cm";
    let weight = data.weight / 10 + " kg";
    let baseExperience = data.base_experience + " xp";
    cardMainSectionRef.innerHTML += `
<table class="table">
    <tbody>
      <tr>
        <td class="spalte1">Height</td>
        <td class="spalte2">${height}</td>
        <td class="spalte3">
          <div class="progress" role="progressbar" aria-valuenow="${height}" aria-valuemin="0" aria-valuemax="300">
            <div class="progress-bar progress-bar-striped" style="width: ${height}%"></div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="spalte1">Weight</td>
        <td class="spalte2">${weight}</td>
        <td class="spalte3">
          <div class="progress" role="progressbar" aria-valuenow="${weight}" aria-valuemin="0" aria-valuemax="200">
            <div class="progress-bar progress-bar-striped" style="width: ${weight}%"></div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="spalte1">Base Experience</td>
        <td class="spalte2">${baseExperience}</td>
        <td class="spalte3">
          <div class="progress" role="progressbar" aria-valuenow="${baseExperience}" aria-valuemin="0" aria-valuemax="500">
            <div class="progress-bar progress-bar-striped" style="width: ${baseExperience / 5}%"></div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="spalte1">Abilities</td>
        <td></td>
        <td class=" cardMainSectionAbilitys"></td>
      </tr>
    </tbody>
  </table>`;
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
