const express = require('express');
var fs = require('fs');
var data = fs.readFileSync('./posts.json');
var words = JSON.parse(data)
const bodyParser = require('body-parser');
const cors = require('cors');
// const cors = require('cors');
// const data = require('./journalEntries.json')

const server = express();
server.use(bodyParser.json());
server.use(cors());
server.use(express.static('server'));

const { response } = require('express');

//Root route
server.get('/', (req,res) => res.send('Hello, world!'));

server.get('/journal', sendAll)

function sendAll(request, response) {
    response.send(words);
}

server.post('/journal', (req, res) => {
    const words = JSON.parse(fs.readFileSync('./posts.json'))
    console.log("words: ", words)
    //
    var data = req.body
    console.log("data: ", data)
    //
    let postID = Object.keys(words).length + 1
    let word = data.word
    console.log("postID: ", postID)
    //
    const newPost = { id: postID, word: word}
    console.log("newPost: ", newPost)
    // words[word] = score;
    words[postID] = word;
    //
    var data = JSON.stringify(words, null, 2);
    console.log("words :", words)
    fs.writeFile('./posts.json', data, finished);

    function finished(err) {
        console.log("all set")
        var reply = { 
            word: word,
            status: "success"
        }
        response.send(reply);
    }
    //
    res.status(201).send(newPost)
})

module.exports = server;
