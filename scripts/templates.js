function getPokemonCardTemplate(noteIndex) {
    return ` <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="pokemon picture${pokemonNamesURLsArray[noteIndex]["ID"]}">
          <div class="card-body">
            <p class="card-text">${pokemonNamesURLsArray[noteIndex]["name"]}</p>
          </div>
        </div>`;
}

function getPokemonOverlayCard(pokemon){
 return `<div class="card-body">
          
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" class="card-img-top" alt="pokemon picture ${pokemon.name}">
          <div id="underImageSection" class="underImageSection">
          <h5 class="card-title">#${pokemon.id}</h5>
          <h5 class="card-title">${pokemon.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
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
            <h5 class="card-title">Main Card</Main></h5>
            <p class="card-text card-text-main-stats-evo">
              <span id="height" class="">Height :</span>
              <span id="weight" class="">Weight :</span>
              <span id="base-experience" class="">Base Experience :</span>
              <span id="abilities" class="">Abilities :</span>
            </p>
          </div>
          <div class="card-body page-Main-Stats-Evo d_none" id="cardBodyStats">
            <h5 class="card-title">Stats Card</Main></h5>
            <p class="card-text card-text-main-stats-evo">
              <span id="height" class="">Hp :</span>
              <span id="weight" class="">Atack :</span>
              <span id="weight" class="">Special-A :</span>
              <span id="base-experience" class="">Defense :</span>
              <span id="weight" class="">Special-D :</span>
              <span id="abilities" class="">Speed :</span>
            </p>
          </div>
          <div class="card-body page-Main-Stats-Evo d_none" id="cardBodyEvoChain">
            <h5 class="card-title">Name1 - Name2 - Name3</Main></h5>
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