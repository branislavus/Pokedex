function getPokemonCardTemplate(noteIndex) {
  return ` <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="pokemon picture${pokemonNamesURLsArray[noteIndex]["ID"]}">
          <div class="card-body">
            <p class="card-text">${pokemonNamesURLsArray[noteIndex]["name"]}</p>
          </div>
        </div>`;
}

function getPokemonOverlayCard(pokemon) {
  return `<div id="topCardToFill" class="card-body topCardToFill">
            <div id="imageSection" class="imageSection">
            </div>
            <div class="card card-for-mobile-size">
              <div class="card-body card-body-overlay-under-image">
                <div id="underImageSection" class="underImageSection">
                </div>
              </div>
            </div>
            
          </div>
        <div class="card card-for-mobile-size text-center groupcard-main-stats-evo">
          <div class="card-header card-header-all">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item" >
                <a id="mainOnClick" class="nav-link nav-link-Main-Stats-Evo active" aria-current="true" href="#" onclick="activeOnClick('mainOnClick')">Main</a>
              </li>
              <li class="nav-item" >
                <a id="statsOnClick" class="nav-link nav-link-Main-Stats-Evo" href="#" onclick="activeOnClick('statsOnClick')">Stats</a>
              </li>
              <li class="nav-item" >
                <a id="evochainOnClick" class="nav-link nav-link-Main-Stats-Evo" href="#" onclick="activeOnClick('evochainOnClick')">Evo-Chain</a>
              </li>
            </ul>
          </div>
          <div class="card-body page-Main-Stats-Evo" id="cardBodyMain" >
            <h5 class="card-title card-title-main">Main Card</h5>
            <p id="cardMainSection" class="card-text card-text-main-stats-evo">
            
            </p>
          </div>
          <div class="card-body page-Main-Stats-Evo d_none" id="cardBodyStats">
            <h5 class="card-title card-title-Stats">Stats Card</h5>
            <p class="card-text card-text-main-stats-evo" id="card-text-main-stats-evo">
            </p>
          </div>
          <div class="card-body page-Main-Stats-Evo d_none" id="cardBodyEvoChain">
            <div id="evo-names" class="evo-names">
              <h5 class="card-title" id="evo-pictures-name1">Name1</h5>
              <h5 class="card-title" id="evo-pictures-name2">Name2</h5>
              <h5 class="card-title" id="evo-pictures-name3">Name3</h5>
            </div>
            <div id="evo-pictures" class="evo-pictures">
              <div id="evo-picture1" class="evo-picture"></div>
              <div id="evo-picture2" class="evo-picture"></div>
              <div id="evo-picture3" class="evo-picture"></div>
            </div> 
            <div class="pressTheButtonText">press the evo-pictures to hear the sound of this lovely pokemons</div>     
          </div>
        </div>
         <div class="cardButtons">
  <a href="#" id="previousButton" class="btn btn-primary cardButtonsDesign" onclick="showPreviousCard(currentPokemonName)">Previous</a>
  <button id="closeButton" class="btn btn-primary cardButtonsDesign" onclick="closeOverlay()">Close</button>
  <a href="#" id="nextButton" class="btn btn-primary cardButtonsDesign" onclick="showNextCard(currentPokemonName)">Next</a>
</div>`;
}

function getCardMainSectionTemplate(height, weight, baseExperience, normalizedHeight, normalizedWeight, normalizedBaseExperience) {
  return `
  <table class="table">
      <tbody>
          <tr>
              <td class="spalte1">Height</td>
              <td class="spalte2">${height}</td>
              <td class="spalte3">
                  <div class="progress" role="progressbar" aria-valuenow="${normalizedHeight}" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar progress-bar-striped" style="width: ${normalizedHeight}%"></div>
                  </div>
              </td>
          </tr>
          <tr>
              <td class="spalte1">Weight</td>
              <td class="spalte2">${weight}</td>
              <td class="spalte3">
                  <div class="progress" role="progressbar" aria-valuenow="${normalizedWeight}" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar progress-bar-striped" style="width: ${normalizedWeight}%"></div>
                  </div>
              </td>
          </tr>
          <tr>
              <td class="spalte1">Base Experience</td>
              <td class="spalte2">${baseExperience}</td>
              <td class="spalte3">
                  <div class="progress" role="progressbar" aria-valuenow="${normalizedBaseExperience}" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar progress-bar-striped" style="width: ${normalizedBaseExperience}%"></div>
                  </div>
              </td>
          </tr>
          <tr>
              <td class="spalte1">Abilities</td>
              <td></td>
              <td class="cardMainSectionAbilitys" id="cardMainSectionAbilitys"></td>
          </tr>
      </tbody>
  </table>`;
}

function renderPokemonCardTemplate(pokemon, globalIndex) {
  pokemonRenderSectionRef.innerHTML += `
      <div class="pokemon-card" id="${pokemon.name}" onclick="pokemonOverlayCard('${pokemon.name}')">
          <h3 class="cardPokemonName">#${pokemon.id} ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
          <div class="card" style="width: 16rem;">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" class="card-img-top" alt="pokemon picture ${pokemon.name}">
              <div class="card-body card-body-badges">
                  <div class="card-badges" id="pokemon-card-type${globalIndex}"></div>
              </div>
          </div>
      </div>
  `;
}