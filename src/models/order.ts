/* eslint-disable camelcase */
/* eslint-disable no-tabs */
import database from '../database';

export type Order = {
    id?: number,
	status: string,
    user_id: string
}

export class OrderInfo {
	async index (): Promise<Order[]> { // to get all the orders available.
		try {
			const conn = await database.connect();
			const sql = 'SELECT * FROM orders';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Something went wrong as Orders are not found${err}`);
		}
	}

	async show (user_id: number): Promise<Order[]> { // to get a certain user orders.
		try {
			const conn = await database.connect();
			const sql = 'SELECT * FROM orders WHERE user_id = ($1)';
			const result = await conn.query(sql, [user_id]);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Can't get the order of user${user_id}. Error${err}`);
		}
	}

	async create (o: Order): Promise <Order> { // to make a new order.
		try {
			const conn = await database.connect();
			const sql = 'INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *';
			const result = await conn.query(sql, [o.status, o.user_id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Couldn't create the order. Error${err}`);
		}
	}
}
