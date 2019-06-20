const db = require('../data/dbConfig');

module.exports = {
    add,
    getPeople
};

function add(person) {
    return db('peopleTable')
        .insert(person, 'id')
    /* .then(ids => {
        return db('peopleTable')
            .where({ id: ids[0] })
            .first();
    }); */
}

function getPeople() {
    return db('peopleTable')
}

