/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
import { Order, OrderInfo } from '../order';

const storage = new OrderInfo();

describe('Orders model', () => {
	it('should have an index method', () => {
		expect(storage.index).toBeDefined();
	});
	it('should have an show method', () => {
		expect(storage.show).toBeDefined();
	});
	it('should have an create method', () => {
		expect(storage.create).toBeDefined();
	});
	it('should create an order', async () => {
		const result = await storage.create({
			id: 1,
			status: 'active',
			user_id: '1'
		});
		expect(result).toEqual({
			id: 1,
			status: 'active',
			user_id: '1'
		});
	});
	it('should return a specific order by user id', async () => {
		const result = await storage.show(1);
		expect(result).toEqual([{
			id: 1,
			status: 'active',
			user_id: '1'
		}]);
	});
	it('should return all users orders', async () => {
		const result = await storage.index();
		expect(result).toEqual([{
			id: 1,
			status: 'active',
			user_id: '1'
		}]);
	});
});
