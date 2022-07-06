/* eslint-disable camelcase */
/* eslint-disable no-tabs */
import express, { NextFunction, Request, Response } from 'express';
import { Order, OrderInfo } from '../models/order';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const {
	TOKEN_SECRET
} = process.env;

const storage = new OrderInfo();

const index = async (req: Request, res: Response) => {
	try {
		const orders = await storage.index();
		res.json(orders);
	} catch (err) {
		res.status(400);
		res.json(`Couldn't get the orders. Error => ${err}`);
	}
};

const show = async (req: Request, res: Response) => {
	try {
		const order = await storage.show(req.body.id);
		res.json(order);
	} catch (err) {
		res.status(400);
		res.json(err);
	}
};

const create = async (req: Request, res: Response) => {
	try {
		const order: Order = {
			status: req.body.status,
			user_id: req.body.user_id
		};
		const newOrder = await storage.create(order);
		res.json(newOrder);
	} catch (err) {
		res.status(401);
		res.json(`Couldn't create the order${err}`);
	}
};

// Creating a middleware for verification.
const verify = (req: Request, res: Response, next: NextFunction) => {
	try {
		const authorizationHeader = req.header('authorization') as string; // using the token in the request header.
		const token = authorizationHeader.split(' ')[1] as string;
		jwt.verify(token, TOKEN_SECRET as Secret);
		next();
	} catch (err) {
		res.status(401);
		res.json(`You are not authorized to do this action, please contact your system adminstrator. ${err}`);
	}
};

const orders_routes = (app: express.Application) => {
	app.get('/orders/', verify, index);
	app.get('/orders/:id', verify, show);
	app.post('/orders', verify, create);
};

export default orders_routes;
