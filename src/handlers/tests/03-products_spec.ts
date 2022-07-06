/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
import supertest from 'supertest';
import app from '../../server';
import { token } from './01-users_spec';
const request = supertest(app);

describe('products handlers', () => {
	it('should add a product', async (done) => {
		const res = await request.post('/products').set('authorization', 'Bearer ' + token)
			.send({ id: 1, name: 'Milk', price: 10 });
		expect(res.status).toBe(200);
		done();
	});
	it('shoudl return all products', async () => {
		const res = await request.get('/products');
		expect(res.status).toBe(200);
	});
	it('should return a specific product', async () => {
		const res = await request.get('/products/:id');
		expect(res.status).toBe(200);
	});
	it('should delete a specific product', async () => {
		const res = await request.delete('/products/:id');
		expect(res.status).toBe(200);
	});
	it('should update a specific product', async () => {
		const res = await request.post('/products/update');
		expect(res.status).toBe(200);
	});
});
