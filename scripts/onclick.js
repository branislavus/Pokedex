let mainOnClickReference = document.getElementById("mainOnClick");
let statsOnClickReference = document.getElementById("statsOnClick");
let evochainOnClickReference = document.getElementById("evochainOnClick");
let cardBodyMainRef = document.getElementById("cardBodyMain");
let cardBodyStatsRef = document.getElementById("cardBodyStats");
let cardBodyEvoChainRef = document.getElementById("cardBodyEvoChain");

function mainOnClick() {

    cardBodyMainRef.style.display = "d_block";
    cardBodyStatsRef.style.display = "d_none";
    cardBodyEvoChainRef.style.display = "d_none";
}

function statsOnClick() {

    cardBodyStatsRef.style.display = "d_block";
    cardBodyMainRef.style.display = "d_none";
    cardBodyEvoChainRef.style.display = "d_none";
}

function evochainOnClick() {
    cardBodyEvoChainRef.style.display = "d_block";
    cardBodyStatsRef.style.display = "d_none";
    cardBodyMainRef.style.display = "d_none";
}

function activeOnClick(source) {
    document.querySelectorAll(".nav-link-Main-Stats-Evo").forEach(link => {
        link.classList.remove("active");
    });
    document.getElementById(source).classList.add("active");
    pageToggle(source);
}

function pageToggle(source) {
    let changer = ['mainOnClick', 'statsOnClick', 'evochainOnClick'];
    let ids = ['cardBodyMain', 'cardBodyStats', 'cardBodyEvoChain'];

    document.querySelectorAll(".page-Main-Stats-Evo").forEach(page => {
        page.classList.add("d_none");
    });
    for (let index = 0; index < changer.length; index++) {
        if (source == changer[index]) {
            document.getElementById(ids[index]).classList.remove("d_none");
        }
    }
}
