

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
//     localStorage.setItem("notes", JSON.stringify(notes));
//     localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
// }

// function getFromLocalStorage() {
//     let myNotes = JSON.parse(localStorage.getItem("notes"));
//     let myNotesTitles = JSON.parse(localStorage.getItem("notesTitles"));
//     if(myNotes == null & myNotesTitles == null ){
//         return;
//     }
//     notes = myNotes;
//     notesTitles = myNotesTitles;
// }

// function render(){
//     let contentRef = document.getElementById('content');
//     contentRef.innerHTML = "";

//     for (let index = 0; index < myData.length; index++) {
//         contentRef.innerHTML += `<p>${myData[index]}</p>`
//     }
// }