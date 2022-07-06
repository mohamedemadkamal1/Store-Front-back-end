/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
import { User, UserInfo } from '../user';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();// to get the required info for password hashing from the .env file.

const {
	PEPPER,
	SALT_ROUNDS
} = process.env;

const _user = new UserInfo();
const hash = bcrypt.hashSync('1234' + PEPPER, parseInt(SALT_ROUNDS as string));

describe('User Model', () => {
	it('should have an index method', () => {
		expect(_user.index).toBeDefined();
	});
	it('should have an show method', () => {
		expect(_user.show).toBeDefined();
	});
	it('should have an create method', () => {
		expect(_user.create).toBeDefined();
	});
	it('should create a user', async () => {
		const result = await _user.create({
			id: 2,
			firstname: 'Mohamed',
			lastname: 'Emad',
			password: 'hash'
		});
		expect(result.id).toEqual(2);
		expect(result.firstname).toEqual('Mohamed');
		expect(result.lastname).toEqual('Emad');
	});
	it('should return all users registered', async () => {
		const result = await _user.index();
		expect(result[0].id).toEqual(1);
		expect(result[0].firstname).toEqual('Mohamed');
		expect(result[0].lastname).toEqual('Emad');
	});
	it('should return a specific user', async () => {
		const result = await _user.show(1);
		expect(result.id).toEqual(1);
		expect(result.firstname).toEqual('Mohamed');
		expect(result.lastname).toEqual('Emad');
	});
});
