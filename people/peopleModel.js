const { people } = require('../api/server')

module.exports = {
    add,
};

function add(person) {
    return (people)
        .insert(person)
}