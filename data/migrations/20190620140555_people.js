
exports.up = function (knex, Promise) {
    return knex.schema.createTable('peopleTable', function (tbl) {
        tbl
            .increments()

        tbl
            .string('name', 200)

        tbl
            .string('job', 200)

    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('peopleTable')

};
