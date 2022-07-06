/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
import { Product, ProductStorage } from '../product';

const storage = new ProductStorage();

describe('Product Model', () => {
	it('should have an index method', () => {
		expect(storage.index).toBeDefined();
	});
	it('should have an show method', () => {
		expect(storage.show).toBeDefined();
	});
	it('should have an create method', () => {
		expect(storage.create).toBeDefined();
	});
	it('should have an update method', () => {
		expect(storage.update).toBeDefined();
	});
	it('should have an index method', () => {
		expect(storage.delete).toBeDefined();
	});
	it('should create a product', async () => {
		const result = await storage.create({
			id: 2,
			name: 'Milk',
			price: 10
		});
		expect(result).toEqual({
			id: 2,
			name: 'Milk',
			price: 10
		});
	});
	it('should return all products list', async () => {
		const result = await storage.index();
		expect(result).toEqual([{
			id: 1,
			name: 'Milk',
			price: 10
		}, {
			id: 2,
			name: 'Milk',
			price: 10
		}]);
	});
	it('should return a specific product', async () => {
		const result = await storage.show('1');
		expect(result).toEqual({
			id: 1,
			name: 'Milk',
			price: 10
		});
	});
	it('should update a product price', async () => {
		const result = await storage.update({
			id: 1,
			name: 'Milk',
			price: 10
		});
		expect(result).toEqual({
			id: 1,
			name: 'Milk',
			price: 10
		});
	});
	it('should remove a certain product', async () => {
		storage.delete('1');
		const result = await storage.index();
		expect(result).toEqual([{
			id: 2,
			name: 'Milk',
			price: 10
		}]);
	});
});
