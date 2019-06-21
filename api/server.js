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
            if (req.body.job) {
                res.status(200).json(ids)
            } else
                res.status(404).json({ error: "required field missing" })

        })
        .catch(error => {
            res.status(500).json(error)
        })
});

server.delete('/people/:id', (req, res) => {
    const { id } = req.params;
    People.remove(id)
        .then(response => {
            res.status(200).json({ message: "entry deleted" })
        })
        .catch(error => {
            res.status(500).json({ error: "could not delete" })
        });
});

module.exports = server;