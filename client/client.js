const form = document.querySelector('#journal-form')
const wordsList = document.querySelector('ul')


form.addEventListener('submit', submitWord);

getAllWords();

// function getAllWords(){
//     fetch('http://localhost:3000/journal')
//         .then(r => r.json())
//         .then(appendWords)
//         .catch(console.warn)
// };

function getAllWords(){
    fetch('http://localhost:3000/journal')
        // .then(r => r.json())
        // .then(function (response) {
        //     quote = response
        //     $('#posty').html(quote)
        //   })
        .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            appendWords(data);
          })
          .catch(function (err) {
            console.log(err);
        });
        // .then(console.log(wordData))
        // .then(document.getElementById('posty').textcontent)
};

// fetch('posts.json')
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 appendData(data);
//             })
//             .catch(function (err) {
//                 console.log('error: ' + err);
//             });
//         function appendData(data) {
//             var mainContainer = document.getElementById("posty");
//             for (var i = 0; i < data.length; i++) {
//                 var div = document.createElement("div");
//                 div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//                 mainContainer.appendChild(div);
//             }
//         }

// var mainContainer = document.getElementById("posty");
// for (var i = 0; i < data.length; i++) {
//     // append each person to our page
//     var div = document.createElement("div");
//     div.innerHTML = 'Name: ' + data[i].postID + ' ' + data[i].post;
//     mainContainer.appendChild(div);
//   }

function submitWord(e){
    e.preventDefault();

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

    fetch('http://localhost:3000/journal', options)
        .then(r => r.json())
        .then(appendWord)
        .catch(console.warn)
};

function appendWords(data){
    data.posts.forEach(appendWord);
};

function appendWord(wordData){
    const newLi = document.createElement('li');
    newLi.textContent = `ID:  post: ${wordData.post}`
    wordsList.append(newLi);
    // document.getElementById('posty').textContent = wordData.post
};


// const wordData = {
//     post: e.target.post.value,
// };

// const options = {
//     method: 'POST',
//     body: JSON.stringify(wordData),
//     headers: new Headers({
//         "Content-Type": "application/json"
//     })
// };
// fetch('/journal', options);
