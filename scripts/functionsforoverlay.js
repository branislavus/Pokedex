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
    await fillMainCardAbilities(data);
}

async function fillMainCardHeightWeightBaseExperience(data) {
    let cardMainSectionRef = document.getElementById("cardMainSection");
    let height = data.height;
    let weight = data.weight;
    let baseExperience = data.base_experience;
    cardMainSectionRef.innerHTML += `
    <table>
    <tr>
      <td>Height</td>
      <td>${height} m</td>
      <td>
        <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="${height}" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: ${height}%"></div>
</div>
      </td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>${weight} kg</td>
      <td>
        <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="${weight}" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar progress-bar-striped" style="width: ${weight}%"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td>Base Experience</td>
      <td>${baseExperience} xp</td>
      <td>
        <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="${baseExperience}" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: ${baseExperience}%"></div>
</div>
      </td>
    </tr>
    <tr>
      <td>Abilities</td>
      <td></td>
      <td>
        <div class="bar-container">
          <div class="bar" style="width: 0%; background-color: #2196F3;"></div>
        </div>
      </td>
    </tr>
  </table>
        `;
}



function fillStatsCard() {

}

function fillEvolutionCard() {

}
