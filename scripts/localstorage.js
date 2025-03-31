

// function init(){
//     getFromLocalStorage();
//     renderNotes();
// }

// function saveData(){
//     let inputRef = document.getElementById('data_input');

//     if(inputRef.value != ""){
//         myData.push(inputRef.value);
//     }
//     saveToLocalStorage();
//     render();
//     inputRef.value = "";
// }

// function saveToLocalStorage(){
//     localStorage.setItem("pokemonsLocalDB", JSON.stringify(notes));
// }

// function getFromLocalStorage() {
//     let myPokemons = JSON.parse(localStorage.getItem("pokemonsLocalDB"));
//     if(myPokemons == null){
//         return;
//     }
//     pokemonALLNamesURLsArray1302fromLSBD = myPokemons;
// }

// function render(){
//     let contentRef = document.getElementById('content');
//     contentRef.innerHTML = "";

//     for (let index = 0; index < myData.length; index++) {
//         contentRef.innerHTML += `<p>${myData[index]}</p>`
//     }
// }