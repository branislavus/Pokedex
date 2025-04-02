let mainOnClickReference = document.getElementById("mainOnClick");
let statsOnClickReference = document.getElementById("statsOnClick");
let evochainOnClickReference = document.getElementById("evochainOnClick");
let cardBodyMainRef = document.getElementById("cardBodyMain");
let cardBodyStatsRef = document.getElementById("cardBodyStats");
let cardBodyEvoChainRef = document.getElementById("cardBodyEvoChain");

function mainOnClick(){

    cardBodyMainRef.style.display = "d_block";
    cardBodyStatsRef.style.display = "d_none";
    cardBodyEvoChainRef.style.display = "d_none";
}

function statsOnClick(){

    cardBodyStatsRef.style.display = "d_block";
    cardBodyMainRef.style.display = "d_none";
    cardBodyEvoChainRef.style.display = "d_none";
}

function evochainOnClick(){
    cardBodyEvoChainRef.style.display = "d_block";
    cardBodyStatsRef.style.display = "d_none";
    cardBodyMainRef.style.display = "d_none";
}

function activeOnClick(source) {
    console.log("Clicked on:", source);
    // Alle aktiven Klassen entfernen
    document.querySelectorAll(".nav-link-Main-Stats-Evo").forEach(link => {
      link.classList.remove("active");
    });
  
    // Dem geklickten Element die aktive Klasse hinzufügen
    document.getElementById(source).classList.add("active");
  }