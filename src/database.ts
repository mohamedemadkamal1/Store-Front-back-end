/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
	HOST_OF_THE_DATABASE,
	PORT_OF_THE_DATABASE,
	NAME_OF_THE_DATABASE,
	NAME_OF_TEST_DATABASE,
	USER_OF_THE_DATABASE,
	PASSWORD_FOR_POSTGRES,
	ENV
} = process.env;

let database;

if (ENV === 'dev') {
	database = new Pool({
		host: HOST_OF_THE_DATABASE,
		database: NAME_OF_THE_DATABASE,
		user: USER_OF_THE_DATABASE,
		password: PASSWORD_FOR_POSTGRES,
		port: PORT_OF_THE_DATABASE as unknown as number
	});
}

if (ENV === 'test') {
	database = new Pool({
		host: HOST_OF_THE_DATABASE,
		database: NAME_OF_TEST_DATABASE,
		user: USER_OF_THE_DATABASE,
		password: PASSWORD_FOR_POSTGRES,
		port: PORT_OF_THE_DATABASE as unknown as number
	});
}

export default database as Pool;
