const express = require('express');
const cors = require('cors');
const data = require('./journalEntries.json')

const server = express();
server.use(cors());


// accessing the json file
// fs.readFile('./userPosts.json', 'utf-8', (err, jsonString) => {
//     console.log(jsonString);
// });

// fs.readFile('./userPosts.json', (err, data) => {
//     if (err) throw err;
//     let entries = JSON.parse(data);
//     console.log(entries);
// });

// console.log('This is after the read call');

//Root route
server.get('/', (req,res) => res.send('Hello, world!'));

//Journal entires route
server.get('/journal', (req, res) => res.json(data));

//Add to journal entries

//Module export
module.exports = server;

// ________________________________________________________________________To_be_amended____________________________________________________________________

// var fs = require('fs');
// var data = fs.readFileSync('words.json');
// var words = JSON.parse(data)
// console.log(words);

// console.log('server is starting');

// const { response } = require('express');
// var express = require('express');

// var app = express();

// var server = app.listen(3050, listening);

// function listening() {
//      console.log("Listening . . . ")
//  }

// app.use(express.static('client'));

// app.get('/add/:word/:score', addWord);

// function addWord(request, response) {
//     var data = request.params;
//     var word = data.word;
//     var score = Number(data.score);
//     if (!score) {
//         var reply = { 
//             msg: "score is required"
//         }
//         response.send(reply);
//     } else {
//         words[word] = score;
//         var data = JSON.stringify(words, null, 2);
//         fs.writeFile('words.json', data, finished);

//         function finished(err) {
//             console.log("all set")
//             var reply = { 
//                 word: word,
//                 score: score,
//                 status: "success"
//             }
//             response.send(reply);
//         }
//     }
// }

// app.get('/all', sendAll)

// function sendAll(request, response) {
//     response.send(words);
// }

// app.get('/search/:word/', searchWord);

// function searchWord(request, response) {
//     var word = request.params.word;
//     var reply;
//     if(words[word]) {
//         reply = {
//             status: "found",
//             word: word,
//             score: words[word]
//         }
//     } else {
//         reply = {
//             status: "not found",
//             word: word,
//         }
//     }
//     response.send(reply)
// }

