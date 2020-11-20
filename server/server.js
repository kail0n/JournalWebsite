const express = require('express');
const fs = require('fs');
const data = fs.readFileSync('./posts.json');
const posts = JSON.parse(data)
const bodyParser = require('body-parser');
const cors = require('cors');
console.log("posts: ", posts)

const server = express();
server.use(bodyParser.json());
server.use(cors());
server.use(express.static('server'));

const { response } = require('express');
//Root route
server.get('/', (req,res) => res.send('Hello, world!'));

server.get('/journal', (req, res) => {
  res.send(posts)
})



server.post('/journal', (req, res) => {
    const posts = JSON.parse(fs.readFileSync('./posts.json'));
    //
    console.log("request: ", req.body)
    //
    const jsondata = req.body;
    console.log('data: ', jsondata);
    //
    const postID = "id: " + Object.keys(posts).length + 1
    const post = jsondata.post;
    const newPost = {id: postID, ...jsondata}
    console.log("new post",newPost)
    //
    posts[postID] = post;
    //
    const writedata = JSON.stringify(posts, null, 2);
    fs.writeFile('./posts.json', writedata, finished);
    function finished(err) {
      console.log('all set');
      res.status(201).send(newPost);
    }
})

module.exports = server;


