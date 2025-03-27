// function getNoteTemplate(noteIndex) {
//     return `<div id="noteCard" class="noteCard">
//         <p class="noteCardTitle">${notesTitles[noteIndex]}</p>
//         <p class="noteCardContent">${notes[noteIndex]}</p>
//         <div class="noteCardButtons">
//             <button id="noteCardButton" class="noteCardButton" onclick="noteToTrash(${noteIndex})">T</button>
//             <button id="noteCardButton" class="noteCardButton" onclick="noteToArchive(${noteIndex})">A</button>
//         </div>
//     </div>`;
// }

// function getNoteTrashTemplate(noteTrashIndex) {
//     return `<div id="noteCard" class="noteCard noteCardTrash">
//         <p class="noteCardTitle">${trashNotesTitles[noteTrashIndex]}</p>
//         <p class="noteCardContent">${trashNotes[noteTrashIndex]}</p>
//         <div class="noteCardButtons">
//             <button id="noteCardButton" class="noteCardButton" onclick="TrashToNotes(${noteTrashIndex})">N</button>
//             <button id="noteCardButton" class="noteCardButton" onclick="deleteNoteForEver(${noteTrashIndex})">D</button>
//         </div>
//     </div>`;
// }

// function getNoteArchiveTemplate(noteArchiveIndex) {
//     return `<div id="noteCard" class="noteCard noteCardArchive">
//         <p class="noteCardTitle">${archiveNotesTitles[noteArchiveIndex]}</p>
//         <p class="noteCardContent">${archiveNotes[noteArchiveIndex]}</p>
//         <div class="noteCardButtons">
//             <button id="noteCardButton" class="noteCardButton" onclick="archiveToNotes(${noteArchiveIndex})">N</button>
//             <button id="noteCardButton" class="noteCardButton" onclick="archiveToTrash(${noteArchiveIndex})">T</button>
//         </div>
//     </div>`;
// }