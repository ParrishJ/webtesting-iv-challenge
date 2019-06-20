const express = require('express');

/* const People = require('../people/peopleModel'); */

const server = express();

server.use(express.json());

const PeopleHelpers = require('../people/peopleModel')

let people = [
    {
        id: 1,
        name: 'Willy',
        job: 'Farmer'
    },
    {
        id: 2,
        name: 'Julia',
        job: 'President of the United States'
    },
]
let id = 3;



server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and working!' });
});

server.post('/people', (req, res) => {
    const person = req.body;
    person.id = id++;
    PeopleHelpers.add(people)
    res.status(200).json({ person });
});

module.exports = server;