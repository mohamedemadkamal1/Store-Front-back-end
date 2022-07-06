/* eslint-disable no-tabs */
import database from '../database';

export type Product ={
    id?: number,
    name: string,
    price: number
}

export class ProductStorage {
	async index (): Promise<Product[]> { // to get all products available.
		try {
			const conn = await database.connect();
			const sql = 'SELECT * FROM products';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Can't get the products${err}`);
		}
	}

	async show (id: string): Promise<Product> { // to get a certain product.
		try {
			const conn = await database.connect();
			const sql = 'SELECT * FROM products WHERE id =($1)';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Can't get the order${err}`);
		}
	}

	async create (p: Product): Promise<Product> { // to add a new product.
		try {
			const conn = await database.connect();
			const sql = 'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *';
			const result = await conn.query(sql, [p.name, p.price]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Couldn't add ${p.name} product. Error:${err}`);
		}
	}

	async update (p: Product): Promise<Product> { // to update the price of a product.
		try {
			const conn = await database.connect();
			const sql = 'UPDATE products SET price = ($1) WHERE id = ($2) RETURNING *';
			const result = await conn.query(sql, [p.price, p.id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Couldn't update the price. Error ${err}`);
		}
	}

	async delete (id: string): Promise<Product[]> { // to remove a certain product.
		try {
			const conn = await database.connect();
			const sql = 'DELETE FROM products WHERE id = ($1) RETURNING *';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Couldn't delete the product. Error ${err}`);
		}
	}
}
