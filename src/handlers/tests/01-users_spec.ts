/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

export let token: string = '';

describe('users handlers', () => {
	it('should Register a user', async (done) => {
		const res = await request.post('/users').send({ firstname: 'Mohamed', lastname: 'Emad', password: '123456' });
		token = res.body;
		expect(res.status).toBe(200);
		done();
	});
	it('should return all users list', async (done) => {
		const res = await request.get('/users').set('authorization', 'Bearer ' + token);
		expect(res.body).toBeTruthy();
		expect(res.status).toBe(200);
		done();
	});
	it('should return a specific user by id', async (done) => {
		const res = await request.get('/users/:id').set('authorization', 'Bearer ' + token);
		expect(res.status).toBe(200);
		done();
	});
});
