/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
import supertest from 'supertest';
import app from '../../server';
import { token } from './01-users_spec';
const request = supertest(app);

describe('orders handlers', () => {
	beforeAll(async (done) => {
		await request.post('/orders').send({ id: 1, product_id: 1, quantity: 10, user_id: 1, status: 'active' });
		done();
	});
	it('should returns the current order', async (done) => {
		const res = await request.get('/orders/:id').set('authorization', 'Bearer ' + token);
		expect(res.status).toBe(200);
		done();
	});
});
