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
    .then(displayEntries)
    .catch(console.warn)
};

function submitEntry(e){
    e.preventDefault();

};

function displayEntries(entries){
    const htmlString = entries
        .map(entries => {
            return `<p class="journalEntry">${entries}</p>`;
        })
        .join(' ');
    
};