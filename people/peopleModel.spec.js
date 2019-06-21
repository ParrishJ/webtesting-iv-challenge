const db = require('../data/dbConfig.js');
const supertest = require('supertest');
const server = require('../api/server')

const { add, getPeople } = require('./peopleModel.js');

describe('people model', () => {
    beforeEach(async () => {
        await db('peopleTable').truncate();
    });

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('add()', () => {
        it('should add person to db', async () => {

            await add({ name: 'Billl', job: 'farmer' });

            const people = await db('peopleTable')

            expect(people).toHaveLength(1)
        })

        it('should return 200 status code when added', async () => {
            await supertest(server)
                .post('/people')
                .send({ name: 'wayne', job: 'farmer' })
                .expect(200)
        })

        it('should return 500 status code when request made incorrectly', async () => {
            await supertest(server)
                .post('/people')
                .send({ name: 'wayne' })
                .expect(500)
        })
    })

    describe('add()', () => {
        it('should return 200 status code when get successful', async () => {
            await supertest(server)
                .get('/people')
                .expect(200)
        })

        it('should return a json object when get successful', async () => {
            await supertest(server)
                .get('/people')
                .expect('Content-Type', /json/i)
        })
    })
})
