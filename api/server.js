const express = require('express');

const People = require('../people/peopleModel')

const server = express();

server.use(express.json());




server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and working!' });
});



server.get('/people', (req, res) => {
    People.getPeople()
        .then(person => {
            res.status(200).json(person)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

server.post('/people', (req, res) => {
    People.add(req.body)
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

module.exports = server;