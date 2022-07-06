/* eslint-disable camelcase */
/* eslint-disable no-tabs */
import express, { NextFunction, Request, Response } from 'express';
import { User, UserInfo } from '../models/user';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();// to get the token secret from the .env file to use it in authintication and authorization.

const {
	TOKEN_SECRET
} = process.env;

const user_ = new UserInfo();

const index = async (req: Request, res: Response) => {
	try {
		const users = await user_.index();
		res.json(users);
	} catch (err) {
		res.status(400);
		res.json(err);
	}
};

const show = async (req: Request, res: Response) => {
	try {
		const user = await user_.show(req.body.id);
		res.json(user);
	} catch (err) {
		res.status(400);
		res.json(err);
	}
};

const create = async (req: Request, res: Response) => {
	try {
		const user: User = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			password: req.body.password
		};
		const newUser = await user_.create(user);
		const token = jwt.sign({ user: newUser }, TOKEN_SECRET as Secret);
		res.json(token);
	} catch (err) {
		res.status(400);
		res.json(err);
	}
};

// Creating a middleware for verification.
const verify = (req: Request, res: Response, next: NextFunction) => {
	try {
		const authorizationHeader = req.header('authorization') as string; // using the token in the request header.
		const token = authorizationHeader.split(' ')[1] as string;
		jwt.verify(token, TOKEN_SECRET as string);
		next();
	} catch (err) {
		res.status(401);
		res.json(`You are not authorized to do this action, please contact your system adminstrator. ${err}`);
	}
};

const users_routes = (app: express.Application) => {
	app.get('/users', verify, index);
	app.get('/users/:id', verify, show);
	app.post('/users', create);
};

export default users_routes;
