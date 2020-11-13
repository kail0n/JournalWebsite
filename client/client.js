// ********************************************
// SETUP
const form = document.querySelector('#journal-form');


// Bind event listeners
form.addEventListener('submit', submitEntry);

// Fetch all cats as soon as app is loaded
getAllJournalEntries();

// ********************************************

function getAllJournalEntries(){
    fetch('http://localhost:3000/journal')
    .then(r=>r.json())
    .then(appendEntry)
    .catch(console.warn)
};

function submitEntry(e){
    e.preventDefault();

};