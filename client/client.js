// // ********************************************
// // SETUP
// const form = document.querySelector('#journal-form');
// const postsList = document.querySelector('ul')
// const butn = document.querySelector('#submit-post')


// // Bind event listeners
// form.addEventListener('submit', submitEntry);

// // Fetch all Journal entries as soon as app is loaded
// getAllJournalEntries();

// // ********************************************
// function getAllJournalEntries() {
//     fetch('http://localhost:3000/journal')
//         .then(r => r.json())
//         .then(displayEntries)
//         .catch(console.warn)
// }

// function submitEntry(e){
//     e.preventDefault();

//     const postData = {
//         post: e.target.post.value,
//     };

//     const options = { 
//         method: 'POST',
//         body: JSON.stringify(postData),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     };

//     fetch('http://localhost:3000/journal', options)
//         .then(r => r.json())
//         .then(displayEntry)
//         .catch(console.warn)
// };

// function displayEntries(data){
//     data.posts.forEach(displayEntry);
// };

// function displayEntry(postData){
//     const newLi = document.createElement('li');
//     newLi.textContent = `Journal Post: ${postData.post}`
//     postsList.append(newLi);
// };

// function dataPosted(result) {
//     console.log(result)
// }

// function postErr(err) {
//     console.log(err)
// }
// -----------------------------------------------------------

const form = document.querySelector('#journal-form')
const wordsList = document.querySelector('ul')

form.addEventListener('submit', submitWord);

getAllWords()

function getAllWords() {
    fetch('http://localhost:3000/journal')
        .then(r => r.json())
        .then(appendWords)
        .catch(console.warn)
}

function submitWord(e){
    e.preventDefault();

    const wordData = {
        word: e.target.word.value,
        // score: e.target.score.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(wordData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/journal', options)
        .then(r => r.json())
        .then(appendWord)
        .catch(console.warn)
};

function appendWords(data){
    data.words.forEach(appendWord);
};

function appendWord(wordData){
    const newLi = document.createElement('li');
    newLi.textContent = `Word: ${wordData.word} ||`
    wordsList.append(newLi);
};

function dataPosted(result) {
    console.log(result)
}

function postErr(err) {
    console.log(err)
}