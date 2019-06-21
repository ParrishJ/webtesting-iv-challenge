const db = require('../data/dbConfig');

module.exports = {
    add,
    getPeople
};

function add(person) {
    return db('peopleTable')
        .insert(person, 'id')

}

function getPeople() {
    return db('peopleTable')
}

