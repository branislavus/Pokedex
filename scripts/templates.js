function getPokemonCardTemplate(noteIndex) {
    return ` <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="pokemon picture${pokemonNamesURLsArray[noteIndex]["ID"]}">
          <div class="card-body">
            <p class="card-text">${pokemonNamesURLsArray[noteIndex]["name"]}</p>
          </div>
        </div>`;
}

function getPokemonOverlayCard(pokemon){
 return `<div id="topCardToFill" class="card-body">
            <div id="imageSection" class="imageSection">
            </div>
            <div class="card">
              <div class="card-body">
                <div id="underImageSection" class="underImageSection">
                </div>
              </div>
            </div>
            
          </div>
        <div class="card text-center groupcard-main-stats-evo">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item" >
                <a id="mainOnClick" class="nav-link nav-link-Main-Stats-Evo active" aria-current="true" href="#" onclick="activeOnClick('mainOnClick')">Main</a>
              </li>
              <li class="nav-item" >
                <a id="statsOnClick" class="nav-link nav-link-Main-Stats-Evo" href="#" onclick="activeOnClick('statsOnClick')">Stats</a>
              </li>
              <li class="nav-item" >
                <a id="evochainOnClick" class="nav-link nav-link-Main-Stats-Evo" aria-disabled="true" onclick="activeOnClick('evochainOnClick')">Evo-Chain</a>
              </li>
            </ul>
          </div>
          <div class="card-body page-Main-Stats-Evo" id="cardBodyMain" >
            <h5 class="card-title">Main Card</h5>
            <p id="cardMainSection" class="card-text card-text-main-stats-evo">
            
            </p>
          </div>
          <div class="card-body page-Main-Stats-Evo d_none" id="cardBodyStats">
            <h5 class="card-title">Stats Card</h5>
            <p class="card-text card-text-main-stats-evo">
              <span id="Hp" class="">Hp :</span>
              <span id="Atack" class="">Atack :</span>
              <span id="Special-A" class="">Special-A :</span>
              <span id="Defense" class="">Defense :</span>
              <span id="Special-D" class="">Special-D :</span>
              <span id="Speed" class="">Speed :</span>
            </p>
          </div>
          <div class="card-body page-Main-Stats-Evo d_none" id="cardBodyEvoChain">
            <h5 class="card-title">Name1 - Name2 - Name3</h5>
            <div id="evo-pictures" class="evo-pictures">
              <div id="evo-picture1" class="evo-picture"></div>
              <div id="evo-picture2" class="evo-picture"></div>
              <div id="evo-picture3" class="evo-picture"></div>
            </div>      
          </div>
        </div>
        <div class="cardButtons">
          <a href="#" class="btn btn-primary cardButtonsDesign">previous Card</a>
          <button class="btn btn-primary cardButtonsDesign" onclick="closeOverlay()">Close</button>
          <a href="#" class="btn btn-primary cardButtonsDesign">next Card</a>
        </div>`;
}

function getcardMainSectionRefTemplate(height, weight, baseExperience){
  return `
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
}