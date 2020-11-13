const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

const journalEntries = [
    "Hello, world!",
    "This is Kai"
];



//Root route
server.get('/', (req,res) => res.send('Hello, world!'));

//Journal entires route
server.get('/journal', (req, res) => res.send(journalEntries));

//Add to journal entries
server.post('/journal', (req, res) => {
    const journalData = req.body;
    const newjournal = {id: journals.length + 1, ...journalData}
    journals.push(newjournal);
    res.status(201).send(newjournal)
})

//Server export
module.exports = server;