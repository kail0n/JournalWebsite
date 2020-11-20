const form = document.querySelector('#journal-form')
const wordsList = document.querySelector('ul')


form.addEventListener('submit', submitWord);

getAllWords();

function getAllWords(){
    fetch('https://desolate-escarpment-31206.herokuapp.com/journal')
        .then(r => r.json())
        .then(appendWords)
        .catch(console.warn)
};


function submitWord(e){
    e.preventDefault();

    console.log("HELLO")

    const wordData = {
        post: e.target.post.value,
    };
    
    const options = { 
        method: 'POST',
        body: JSON.stringify(wordData),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    };

    fetch('https://desolate-escarpment-31206.herokuapp.com/journal', options)
        .then(r => r.json())
        .then(appendWord)
        .catch(console.warn)
};

function appendWords(data){
    data.posts.forEach(appendWord);
};

function appendWord(wordData){
    const newLi = document.createElement('li');
    newLi.textContent = `post: ${wordData.post}`
    wordsList.append(newLi);
};


