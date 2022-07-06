/* eslint-disable no-tabs */
import database from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();// to get the required info for password hashing from the .env file.

const {
	PEPPER,
	SALT_ROUNDS
} = process.env;

export type User = {
    id?: number,
    firstname: string,
    lastname: string,
    password: string
};

export class UserInfo {
	async index (): Promise<User[]> { // to get all registered users.
		try {
			const conn = await database.connect();
			const sql = 'SELECT * FROM users';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Something went wrong as Users are not found${err}`);
		}
	}

	async show (id: number): Promise<User> { // to get a certain user.
		try {
			const conn = await database.connect();
			const sql = 'SELECT * FROM users WHERE id=($1)';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Something went wrong as User is not found${err}`);
		}
	}

	async create (u: User): Promise<User> { // to register a new user.
		// creating a hash for hashing the password.
		const hash = bcrypt.hashSync(u.password + PEPPER, parseInt(SALT_ROUNDS as string));
		try {
			const conn = await database.connect();
			const sql = 'INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *';
			const result = await database.query(sql, [u.firstname, u.lastname, hash]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Something went wrong: Can't create the user${err}`);
		}
	}
}
