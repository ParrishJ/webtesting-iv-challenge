const db = require('../data/dbConfig');

module.exports = {
    add,
    getPeople,
    remove
};

function add(person) {
    return db('peopleTable')
        .insert(person, 'id')

}

function getPeople() {
    return db('peopleTable')
}

function remove(id) {
    return db('peopleTable')
        .where('id', id)
        .del()
}

