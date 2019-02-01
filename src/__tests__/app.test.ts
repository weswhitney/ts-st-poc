import app from '../../app';
const request = require('supertest');

describe('GET / - a simple api endpoint', () => {
    it('Hello API Request', async () => {
        const result = await request(app).get('/');
        expect(result.text).toEqual("Hi");
        expect(result.status).toEqual(200);
    });
})