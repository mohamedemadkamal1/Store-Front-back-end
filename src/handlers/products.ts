/* eslint-disable camelcase */
/* eslint-disable no-tabs */
import express, { NextFunction, Request, Response } from 'express';
import { Product, ProductStorage } from '../models/product';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const {
	TOKEN_SECRET
} = process.env;

const storage = new ProductStorage();

const index = async (_req: Request, res: Response) => {
	try {
		const products = await storage.index();
		res.json(products);
	} catch (err) {
		res.status(400);
		res.json(err);
	}
};

const show = async (req: Request, res: Response) => {
	try {
		const product = await storage.show(req.body.id);
		res.json(product);
	} catch (err) {
		res.status(400);
		res.json(err);
	}
};

const create = async (req: Request, res: Response) => {
	try {
		const product: Product = {
			price: req.body.price,
			name: req.body.name
		};
		const addProduct = await storage.create(product);
		res.json(addProduct);
	} catch (err) {
		res.status(400);
		res.json(err);
	}
};

const update = async (req: Request, res: Response) => {
	const product: Product = {
		id: req.body.id,
		price: req.body.price,
		name: req.body.name
	};
	try {
		const updateProduct = await storage.update(product);
		res.json(updateProduct);
	} catch (err) {
		res.status(400);
		res.json(err);
	}
};

const remove = async (req: Request, res: Response) => {
	try {
		const removed = await storage.delete(req.body.id);
		res.json(removed);
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
		jwt.verify(token, TOKEN_SECRET as Secret);
		next();
	} catch (err) {
		res.status(401);
		res.json(`You are not authorized to do this action, please contact your system adminstrator. ${err}`);
	}
};

const products_routes = (app: express.Application) => {
	app.get('/products', index);
	app.get('/products/:id', show);
	app.post('/products/', verify, create);
	app.post('/products/update', update);
	app.delete('/products/:id', remove);
};

export default products_routes;
