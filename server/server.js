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

