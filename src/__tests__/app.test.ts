import app from '../../app';
const request = require('supertest');

describe(__filename, () => {
    describe('GET / - a simple api endpoint', () => {
        it('Hello API Request', async () => {
            const result = await request(app).get('/');
            expect(result.text).toEqual("Hi");
            expect(result.status).toEqual(200);
        });
    })
    describe('GET /bye', () => {
        it('Bye APT request', async () => {
            const result = await request(app).get('/bye');
            expect(result.text).toEqual('Bye');
        })
    })
    describe('GET /hello', () => {
        it('Bye APT request', async () => {
            const result = await request(app).get('/hello');
            expect(result.text).toEqual("how's it going?");
        })
    })
})